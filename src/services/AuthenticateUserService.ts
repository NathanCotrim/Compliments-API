import { getCustomRepository, Repository } from 'typeorm';
import { UsersRepository } from '../database/repositories/usersRepository';
import { User } from '../database/entities/User';

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
	email: string;
	password: string;
}

class AuthenticateUserService {
	async authenticateUser({ email, password }: IAuthenticateRequest) {
		const usersRepository = getCustomRepository(UsersRepository);

		this.#validate(password, email, usersRepository);

		const token = this.#signJsonWebToken(email, usersRepository);

		return token;
	}

	async #validate(password: string, email: string, usersRepository: Repository<User>) {
		const user = await usersRepository.findOne({
			email,
		});

		if (!user) {
			throw new Error('Invalid Credentials');
		}

		this.#validatePassword(user, password);

		return user.id;
	}

	async #validatePassword(user: User, password: string) {
		const passwordMatch = await compare(password, user.password);

		if (!passwordMatch) {
			throw new Error('Invalid Credentials');
		}
	}

	async #signJsonWebToken(email: string, usersRepository: Repository<User>) {
		const { id } = await usersRepository.findOne({
			email,
		});

		const token = sign(
			{
				email,
				id,
			},
			'7e429fd220ae12f0dd437e7716281e88',
			{
				expiresIn: '1d',
			}
		);

		return token;
	}
}

export { AuthenticateUserService };

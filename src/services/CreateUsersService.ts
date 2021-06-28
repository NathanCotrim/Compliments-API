import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../database/repositories/usersRepository';

interface IUserRequest {
	name: string;
	email: string;
	admin?: boolean;
	password: string;
}

class UsersService {
	async createUser({ name, email, admin = false, password }: IUserRequest) {
		if (!email) {
			throw new Error('User already exists');
		}

		const usersRepository = getCustomRepository(UsersRepository);

		const userAlreadyExists = await usersRepository.findOne({
			email,
		});

		if (userAlreadyExists) {
			throw new Error('User already exists');
		}

		const user = usersRepository.create({
			name,
			email,
			admin,
			password,
		});

		await usersRepository.save(user);

		delete user.password;
		return user;
	}
}

export { UsersService };

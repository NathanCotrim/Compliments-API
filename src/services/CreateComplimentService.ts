import { getCustomRepository, Repository } from 'typeorm';
import { Compliment } from '../database/entities/Compliments';
import { User } from '../database/entities/User';
import { ComplimentsRepository } from '../database/repositories/complimentsRepositories';
import { UsersRepository } from '../database/repositories/usersRepository';

interface IComplimentRequest {
	tag_id: string;
	user_sender: string;
	user_receiver: string;
	message: string;
}

class CreateComplimentService {
	async createCompliment({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
		const complimentsRepository = getCustomRepository(ComplimentsRepository);
		const usersRepository = getCustomRepository(UsersRepository);

		await this.#validate(usersRepository, user_receiver, user_sender);

		return await this.#createCompliment(complimentsRepository, {
			tag_id,
			user_receiver,
			user_sender,
			message,
		});
	}

	async #validate(usersRepository: Repository<User>, user_receiver: string, user_sender: string) {
		const userReceiverExists = await usersRepository.findOne(user_receiver);

		if (!userReceiverExists) {
			throw new Error('User Receiver does not exists');
		}

		if (user_sender === user_receiver) {
			throw new Error('User receiver and user sender cannot be the same');
		}
	}

	async #createCompliment(
		complimentsRepository: Repository<Compliment>,
		{ tag_id, user_receiver, user_sender, message }: IComplimentRequest
	) {
		const compliment = complimentsRepository.create({
			tag_id,
			user_receiver,
			user_sender,
			message,
		});

		await complimentsRepository.save(compliment);

		return compliment;
	}
}

export { CreateComplimentService };

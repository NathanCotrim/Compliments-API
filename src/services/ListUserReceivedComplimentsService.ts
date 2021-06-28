import { getCustomRepository } from 'typeorm';
import { ComplimentsRepository } from '../database/repositories/complimentsRepositories';

class ListUserReceivedComplimentsService {
	async execute(user_id: string) {
		const complimentsRepository = getCustomRepository(ComplimentsRepository);

		const compliments = await complimentsRepository.find({
			where: {
				user_receiver: user_id,
			},
			relations: ['userSender', 'userReceiver', 'tag'],
		});

		return compliments;
	}
}

export { ListUserReceivedComplimentsService };

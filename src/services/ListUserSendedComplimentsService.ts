import { getCustomRepository } from 'typeorm';
import { ComplimentsRepository } from '../database/repositories/complimentsRepositories';

class ListUserSendedComplimentsService {
	async execute(user_id: string) {
		const complimentsRepository = getCustomRepository(ComplimentsRepository);

		const compliments = await complimentsRepository.find({
			where: {
				user_sender: user_id,
			},
		});

		return compliments;
	}
}

export { ListUserSendedComplimentsService };

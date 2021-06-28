import { getCustomRepository } from 'typeorm';
import { TagsRepository } from '../database/repositories/tagsRepository';
import { classToPlain } from 'class-transformer';

class ListTagsService {
	async execute() {
		const tagsRepository = getCustomRepository(TagsRepository);

		const tags = await tagsRepository.find();

		return classToPlain(tags);
	}
}

export { ListTagsService };

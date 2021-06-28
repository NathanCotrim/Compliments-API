import { getCustomRepository, Repository } from 'typeorm';
import { TagsRepository } from '../database/repositories/tagsRepository';
import { Tag } from '../database/entities/Tag';

class CreateTagService {
	async createTag(name: string) {
		const tagsRepository = getCustomRepository(TagsRepository);
		await this.#validate(name, tagsRepository);

		const newTag = tagsRepository.create({
			name,
		});

		await tagsRepository.save(newTag);

		return newTag;
	}

	async #validate(name: string, tagsRepository: Repository<Tag>) {
		const tagAlreadyExists = await tagsRepository.findOne({
			name,
		});

		if (!name || tagAlreadyExists) {
			throw new Error('Invalid Tag Name');
		}
	}
}

export { CreateTagService };

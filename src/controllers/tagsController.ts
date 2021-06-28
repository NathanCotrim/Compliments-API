import { Request, Response } from 'express';
import { CreateTagService } from '../services/CreateTagsService';

class TagController {
	async handle(req: Request, res: Response) {
		const tagService = new CreateTagService();

		const { name } = req.body;

		const tag = await tagService.createTag(name);

		return res.json(tag);
	}
}

export { TagController };

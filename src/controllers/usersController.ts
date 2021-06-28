import { Request, Response } from 'express';
import { UsersService } from '../services/CreateUsersService';

class UserController {
	async handle(req: Request, res: Response) {
		const { name, email, admin, password } = req.body;

		const createUserService = new UsersService();

		const user = await createUserService.createUser({ name, email, admin, password });

		return res.json(user);
	}
}

export { UserController };

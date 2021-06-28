import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
	id: string;
}

export function ensureUserAuthenticated(req: Request, res: Response, next: NextFunction) {
	const { authorization } = req.headers;

	if (!authorization) {
		return res.sendStatus(401);
	}

	const token = authorization.replace('Bearer', '').trim();

	try {
		const { id } = verify(token, '7e429fd220ae12f0dd437e7716281e88') as IPayload;

		req.user_id = id;
	} catch (error) {
		return res.sendStatus(401);
	}

	return next();
}

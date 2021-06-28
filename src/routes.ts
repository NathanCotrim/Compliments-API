import { Router } from 'express';

import { UserController } from './controllers/usersController';
import { TagController } from './controllers/tagsController';
import { AuthenticateUserController } from './controllers/authenticateUserController';
import { CreateComplimentsController } from './controllers/complimentsController';

import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureUserAuthenticated } from './middlewares/ensureUserAuthenticated';
import { ListUserReceivedComplimentsController } from './controllers/listUserReceivedComplimentsController';
import { ListUserSendedComplimentsController } from './controllers/listUserSendedComplimentsController';
import { ListTagsController } from './controllers/listTagsController';
import { ListUsersController } from './controllers/listUsersController';

const routes = Router();

const usersController = new UserController();
const tagsController = new TagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentsController();
const listUserReceivedCompliments = new ListUserReceivedComplimentsController();
const listUserSendedCompliments = new ListUserSendedComplimentsController();
const listTagsController = new ListTagsController();
const listUsers = new ListUsersController();

routes.get('/', (req, res) => {
	res.render('index');
});

routes.post('/users', usersController.handle);
routes.post('/tags', ensureUserAuthenticated, ensureAdmin, tagsController.handle);
routes.post('/compliments', ensureUserAuthenticated, createComplimentController.handle);
routes.post('/login', authenticateUserController.handle);

routes.get('/users/compliments/sended', ensureUserAuthenticated, listUserSendedCompliments.handle);
routes.get(
	'/users/compliments/received',
	ensureUserAuthenticated,
	listUserReceivedCompliments.handle
);
routes.get('/tags', listTagsController.handle);
routes.get('/users', ensureUserAuthenticated, listUsers.handle);

export { routes };

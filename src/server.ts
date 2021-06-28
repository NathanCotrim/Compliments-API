import 'reflect-metadata';
import './database/connection';

import 'express-async-errors';
import cors from 'cors';

import express from 'express';
import path from 'path';

import { routes } from './routes';
// import path from 'path';

import { errorMiddleware } from './middlewares/errorMiddleware';

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(express.static(path.join(__dirname, '..', 'public')));
server.set('views', path.join(__dirname, '..', 'public'));
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');

server.use(cors());
server.use(routes);

server.use(errorMiddleware);

server.listen(3333, () => console.log('server is running at port 3333'));

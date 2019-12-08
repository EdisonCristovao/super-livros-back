import { Router } from 'express';

import BookController from './app/controllers/BookController';
// import SessionController from './app/controllers/SessionController';
// import authMidleware from './app/midlewares/auth';

const routes = new Router();

routes.get('/books', BookController.index);
routes.get('/books/:id', BookController.show);
routes.post('/books', BookController.store);
// routes.post('/session', SessionController.store);

// routes.use(authMidleware);

// routes.put('/users', UserController.update);
export default routes;

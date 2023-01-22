import { Router } from 'express';
import { movieRoutes } from '@src/routes/movie-routes';

const routes = Router();

routes.use('/movies', movieRoutes);

export { routes };

import { Router } from 'express';

import { createMovieController } from '@src/modules/movies/use-cases/create-movie';
import { listMoviesController } from '@src/modules/movies/use-cases/list-movies';
import { upload } from '@src/middlewares/upload';

const movieRoutes = Router();

movieRoutes.post('/', upload.array('images', 3), async (req, res) => {
    return createMovieController.handle(req, res);
});

movieRoutes.get('/', async (req, res) => {
    return listMoviesController.handle(req, res);
});

export { movieRoutes };

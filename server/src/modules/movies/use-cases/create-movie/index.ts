import { InMemoryMovieRepository } from '@src/modules/movies/repositories/implementations/in-memory-movie-repository';
import { CreateMovieUseCase } from '@src/modules/movies/use-cases/create-movie/create-movie-use-case';
import { CreateMovieController } from '@src/modules/movies/use-cases/create-movie/create-movie-controller';

const movieRepository = InMemoryMovieRepository.getInstance();
const createMovieUseCase = new CreateMovieUseCase(movieRepository);
export const createMovieController = new CreateMovieController(
    createMovieUseCase,
);

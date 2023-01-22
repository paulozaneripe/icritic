import { InMemoryMovieRepository } from '@src/modules/movies/repositories/implementations/in-memory-movie-repository';
import { ListMoviesUseCase } from '@src/modules/movies/use-cases/list-movies/list-movies-use-case';
import { ListMoviesController } from '@src/modules/movies/use-cases/list-movies/list-movies-controller';

const movieRepository = InMemoryMovieRepository.getInstance();
const listMoviesUseCase = new ListMoviesUseCase(movieRepository);
export const listMoviesController = new ListMoviesController(listMoviesUseCase);

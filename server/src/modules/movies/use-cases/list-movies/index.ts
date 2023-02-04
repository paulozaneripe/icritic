import { InMemoryMovieRepository } from '@src/modules/movies/repositories/implementations/in-memory-movie-repository';
import { InMemoryMovieImageRepository } from '@src/modules/movies/repositories/implementations/in-memory-movie-image-repository';
import { InMemoryImageRepository } from '@src/modules/images/repositories/implementations/in-memory-image-repository';
import { ListMoviesUseCase } from '@src/modules/movies/use-cases/list-movies/list-movies-use-case';
import { ListMoviesController } from '@src/modules/movies/use-cases/list-movies/list-movies-controller';

const movieRepository = InMemoryMovieRepository.getInstance();
const imageRepository = InMemoryImageRepository.getInstance();
const movieImageRepository = InMemoryMovieImageRepository.getInstance();
const listMoviesUseCase = new ListMoviesUseCase(
    movieRepository,
    imageRepository,
    movieImageRepository,
);
export const listMoviesController = new ListMoviesController(listMoviesUseCase);

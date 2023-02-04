import { InMemoryMovieRepository } from '@src/modules/movies/repositories/implementations/in-memory-movie-repository';
import { InMemoryMovieImageRepository } from '@src/modules/movies/repositories/implementations/in-memory-movie-image-repository';
import { CreateMovieUseCase } from '@src/modules/movies/use-cases/create-movie/create-movie-use-case';
import { CreateMovieController } from '@src/modules/movies/use-cases/create-movie/create-movie-controller';
import { InMemoryImageRepository } from '@src/modules/images/repositories/implementations/in-memory-image-repository';

const movieRepository = InMemoryMovieRepository.getInstance();
const ImageRepository = InMemoryImageRepository.getInstance();
const movieImageRepository = InMemoryMovieImageRepository.getInstance();
const createMovieUseCase = new CreateMovieUseCase(
    movieRepository,
    ImageRepository,
    movieImageRepository,
);
export const createMovieController = new CreateMovieController(
    createMovieUseCase,
);

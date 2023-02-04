import { describe, it, expect, expectTypeOf } from 'vitest';
import { ListMoviesUseCase } from '@src/modules/movies/use-cases/list-movies/list-movies-use-case';
import { InMemoryMovieRepository } from '@src/modules/movies/repositories/implementations/in-memory-movie-repository';
import { InMemoryImageRepository } from '@src/modules/images/repositories/implementations/in-memory-image-repository';
import { InMemoryMovieImageRepository } from '@src/modules/movies/repositories/implementations/in-memory-movie-image-repository';
import { Movie } from '@src/modules/movies/entities/movie';

const movieRepository = InMemoryMovieRepository.getInstance();
const imageRepository = InMemoryImageRepository.getInstance();
const movieImageRepository = InMemoryMovieImageRepository.getInstance();

describe('List movies use case', () => {
    it('should list all movies', async () => {
        const listMovies = new ListMoviesUseCase(
            movieRepository,
            imageRepository,
            movieImageRepository,
        );

        const movies = await listMovies.execute();

        expectTypeOf(movies).toEqualTypeOf<Movie[]>();
        expect(movies).toBeTruthy();
    });
});

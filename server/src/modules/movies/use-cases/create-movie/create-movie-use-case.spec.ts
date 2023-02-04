import { describe, it, expect } from 'vitest';
import { CreateMovieUseCase } from '@src/modules/movies/use-cases/create-movie/create-movie-use-case';
import { InMemoryMovieRepository } from '@src/modules/movies/repositories/implementations/in-memory-movie-repository';
import { InMemoryImageRepository } from '@src/modules/images/repositories/implementations/in-memory-image-repository';
import { InMemoryMovieImageRepository } from '@src/modules/movies/repositories/implementations/in-memory-movie-image-repository';

const movieRepository = InMemoryMovieRepository.getInstance();
const imageRepository = InMemoryImageRepository.getInstance();
const movieImageRepository = InMemoryMovieImageRepository.getInstance();

describe('Create movie use case', () => {
    it('should be able to create a new movie', async () => {
        const createMovie = new CreateMovieUseCase(
            movieRepository,
            imageRepository,
            movieImageRepository,
        );

        const images: File[] = [];

        await createMovie.execute({
            name: 'fake-name',
            synopsis: 'fake-synopsis',
            releaseDate: new Date(),
            language: 'fake-language',
            countryId: 1,
            images,
        });

        const movies = await movieRepository.list();

        expect(movies.length).toBe(1);
    });
});

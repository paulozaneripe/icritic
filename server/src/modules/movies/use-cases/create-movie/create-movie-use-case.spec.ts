import { describe, it, expect } from 'vitest';
import { CreateMovieUseCase } from '@src/modules/movies/use-cases/create-movie/create-movie-use-case';
import { InMemoryMovieRepository } from '@src/modules/movies/repositories/implementations/in-memory-movie-repository';

const movieRepository = InMemoryMovieRepository.getInstance();

describe('Create movie use case', () => {
    it('should be able to create a new movie', async () => {
        const createMovie = new CreateMovieUseCase(movieRepository);

        await createMovie.execute({
            name: 'fake-name',
            synopsis: 'fake-synopsis',
            releaseDate: new Date(),
            language: 'fake-language',
            countryId: 1,
        });

        const movies = await movieRepository.list();

        expect(movies.length).toBe(1);
    });
});

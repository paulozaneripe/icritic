import { MovieRepository } from '@src/modules/movies/repositories/movie-repository';
import { Movie } from '@src/modules/movies/entities/movie';

export class ListMoviesUseCase {
    constructor(private movieRepository: MovieRepository) {}

    async execute(): Promise<Movie[]> {
        const movies = await this.movieRepository.list();

        return movies;
    }
}

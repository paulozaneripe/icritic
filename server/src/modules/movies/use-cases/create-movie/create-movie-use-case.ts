import { MovieRepository } from '@src/modules/movies/repositories/movie-repository';
import { Movie } from '@src/modules/movies/entities/movie';

type CreateMovieRequest = {
    name: string;
    synopsis: string;
    releaseDate: Date;
    language: string;
    countryId: number;
};

export class CreateMovieUseCase {
    constructor(private movieRepository: MovieRepository) {}

    async execute(props: CreateMovieRequest): Promise<void> {
        const movie = Movie.create(props);

        await this.movieRepository.create(movie);
    }
}

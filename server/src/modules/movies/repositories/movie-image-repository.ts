import { MovieImage } from '@src/modules/movies/entities/movie-image';

export interface MovieImageRepository {
    create(movie: MovieImage): Promise<void>;

    findAllByMovieId(movieId: string): Promise<MovieImage[]>;
}

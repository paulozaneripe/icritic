import { Movie } from '@src/modules/movies/entities/movie';

export interface MovieRepository {
    create(movie: Movie): Promise<void>;

    findById(id: string): Promise<Movie | null>;

    list(): Promise<Movie[]>;
}

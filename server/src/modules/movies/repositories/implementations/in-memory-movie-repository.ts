import { Movie } from '@src/modules/movies/entities/movie';
import { MovieRepository } from '@src/modules/movies/repositories/movie-repository';

export class InMemoryMovieRepository implements MovieRepository {
    private movies: Movie[];

    private static INSTANCE: InMemoryMovieRepository;

    private constructor() {
        this.movies = [];
    }

    public static getInstance(): InMemoryMovieRepository {
        if (!InMemoryMovieRepository.INSTANCE)
            InMemoryMovieRepository.INSTANCE = new InMemoryMovieRepository();

        return InMemoryMovieRepository.INSTANCE;
    }

    async create(movie: Movie): Promise<void> {
        this.movies.push(movie);
    }

    async findById(id: string): Promise<Movie | null> {
        const movies = this.movies.find((movie) => movie.id === id);
        return movies ?? null;
    }

    async list(): Promise<Movie[]> {
        return this.movies;
    }
}

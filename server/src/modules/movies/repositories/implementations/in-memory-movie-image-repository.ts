import { MovieImage } from '@src/modules/movies/entities/movie-image';
import { MovieImageRepository } from '@src/modules/movies/repositories/movie-image-repository';

export class InMemoryMovieImageRepository implements MovieImageRepository {
    private movieImages: MovieImage[];

    private static INSTANCE: InMemoryMovieImageRepository;

    private constructor() {
        this.movieImages = [];
    }

    public static getInstance(): InMemoryMovieImageRepository {
        if (!InMemoryMovieImageRepository.INSTANCE)
            InMemoryMovieImageRepository.INSTANCE =
                new InMemoryMovieImageRepository();

        return InMemoryMovieImageRepository.INSTANCE;
    }

    async create(movieImage: MovieImage): Promise<void> {
        this.movieImages.push(movieImage);
    }

    async findAllByMovieId(movieId: string): Promise<MovieImage[]> {
        const movieImages = this.movieImages.filter(
            (movieImage) => movieImage.props.movieId === movieId,
        );
        return movieImages;
    }
}

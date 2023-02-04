import { MovieRepository } from '@src/modules/movies/repositories/movie-repository';
import { ImageRepository } from '@src/modules/images/repositories/image-repository';
import { MovieImageRepository } from '@src/modules/movies/repositories/movie-image-repository';
import { Movie } from '@src/modules/movies/entities/movie';

export class ListMoviesUseCase {
    constructor(
        private movieRepository: MovieRepository,
        private imageRepository: ImageRepository,
        private movieImageRepository: MovieImageRepository,
    ) {}

    async execute(): Promise<Movie[]> {
        const movies = await this.movieRepository.list();

        const moviesPromise = movies.map(async (movie) => {
            const movieImages =
                await this.movieImageRepository.findAllByMovieId(movie.id);

            const filteredMovie: Movie = JSON.parse(JSON.stringify(movie));

            movieImages.forEach(async (movieImage) => {
                const image = await this.imageRepository.findById(
                    movieImage.props.imageId,
                );

                if (image) filteredMovie.props.images?.push(image);
            });

            return filteredMovie;
        });

        const filteredMovies = await Promise.all(moviesPromise);

        return filteredMovies;
    }
}

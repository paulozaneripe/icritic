import { MovieRepository } from '@src/modules/movies/repositories/movie-repository';
import { ImageRepository } from '@src/modules/images/repositories/image-repository';
import { MovieImageRepository } from '@src/modules/movies/repositories/movie-image-repository';
import { Movie } from '@src/modules/movies/entities/movie';
import { Image } from '@src/modules/images/entities/image';
import { MovieImage } from '@src/modules/movies/entities/movie-image';

type CreateMovieRequest = {
    name: string;
    synopsis: string;
    releaseDate: Date;
    language: string;
    countryId: number;
    images?: File[];
};

export class CreateMovieUseCase {
    constructor(
        private movieRepository: MovieRepository,
        private imageRepository: ImageRepository,
        private movieImageRepository: MovieImageRepository,
    ) {}

    async execute(props: CreateMovieRequest): Promise<void> {
        const { name, synopsis, releaseDate, language, countryId, images } =
            props;

        const movie = Movie.create({
            name,
            synopsis,
            releaseDate,
            language,
            countryId,
        });

        if (images && images.length > 0) {
            const imagesPromise = images.map(async (image) => {
                const { path } = image;

                const newImage = Image.create({ path });

                await this.imageRepository.create(newImage);

                const movieImage = MovieImage.create({
                    movieId: movie.id,
                    imageId: newImage.id,
                });

                await this.movieImageRepository.create(movieImage);
            });

            await Promise.all(imagesPromise);
        }

        await this.movieRepository.create(movie);
    }
}

import { Entity } from '@src/core/domain/entity';

type MovieImageProps = {
    id?: string;
    movieId: string;
    imageId: string;
    createdAt?: Date;
};

export class MovieImage extends Entity<MovieImageProps> {
    private constructor(props: MovieImageProps, id?: string) {
        super(props, id);
    }

    static create(props: MovieImageProps, id?: string) {
        const movieImage = new MovieImage(
            { ...props, createdAt: props.createdAt ?? new Date() },
            id,
        );

        return movieImage;
    }
}

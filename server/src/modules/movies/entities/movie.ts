import { Entity } from '@src/core/domain/entity';

type MovieProps = {
    id?: string;
    name: string;
    synopsis: string;
    releaseDate: Date;
    language: string;
    countryId: number;
    createdAt?: Date;
};

export class Movie extends Entity<MovieProps> {
    private constructor(props: MovieProps, id?: string) {
        super(props, id);
    }

    static create(props: MovieProps, id?: string) {
        const movie = new Movie(
            { ...props, createdAt: props.createdAt ?? new Date() },
            id,
        );

        return movie;
    }
}

import { Entity } from '@src/core/domain/entity';

type ImageProps = {
    id?: string;
    path: string;
    createdAt?: Date;
};

export class Image extends Entity<ImageProps> {
    private constructor(props: ImageProps, id?: string) {
        super(props, id);
    }

    static create(props: ImageProps, id?: string) {
        const movie = new Image(
            { ...props, createdAt: props.createdAt ?? new Date() },
            id,
        );

        return movie;
    }
}

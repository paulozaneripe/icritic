import { Image } from '@src/modules/images/entities/image';

export interface ImageRepository {
    create(image: Image): Promise<void>;

    findById(id: string): Promise<Image | null>;
}

import { Image } from '@src/modules/images/entities/image';
import { ImageRepository } from '@src/modules/images/repositories/image-repository';

export class InMemoryImageRepository implements ImageRepository {
    private images: Image[];

    private static INSTANCE: InMemoryImageRepository;

    private constructor() {
        this.images = [];
    }

    public static getInstance(): InMemoryImageRepository {
        if (!InMemoryImageRepository.INSTANCE)
            InMemoryImageRepository.INSTANCE = new InMemoryImageRepository();

        return InMemoryImageRepository.INSTANCE;
    }

    async create(image: Image): Promise<void> {
        this.images.push(image);
    }

    async findById(id: string): Promise<Image | null> {
        const images = this.images.find((image) => image.id === id);
        return images ?? null;
    }
}

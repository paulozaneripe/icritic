import multer, { diskStorage, Options, StorageEngine } from 'multer';
import path from 'path';
import { env } from '@src/config/env';

const fileOptions = {
    name: (file: File) => `${Date.now()}-${file.originalname}`,
    acceptedFormats: ['image/jpeg', 'image/jpg', 'image/png'],
    maxSize: 5 * 1024 * 1024, // 5MB
    localDir: '../../uploads',
};

const storageTypes: {
    [key: string]: StorageEngine;
} = {
    local: diskStorage({
        destination: (req, file, next) => {
            next(null, path.join(__dirname, fileOptions.localDir));
        },
        filename: (req, file, next) => {
            next(null, fileOptions.name(file));
        },
    }),
};

const fileFilter: Options['fileFilter'] = (req, file, cb) => {
    const isAcceptedFormat = fileOptions.acceptedFormats.includes(
        file.mimetype,
    );

    if (!isAcceptedFormat) return cb(new Error('Invalid format!'));

    return cb(null, true);
};

export const upload = multer({
    storage: storageTypes[env.STORAGE_TYPE],
    limits: { fileSize: fileOptions.maxSize },
    fileFilter,
});

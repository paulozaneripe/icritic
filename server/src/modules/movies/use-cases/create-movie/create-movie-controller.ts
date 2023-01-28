import { CreateMovieUseCase } from '@src/modules/movies/use-cases/create-movie/create-movie-use-case';
import { Request, Response } from 'express';

export class CreateMovieController {
    constructor(private createMovieUseCase: CreateMovieUseCase) {}

    handle(req: Request, res: Response): Response {
        const images = req.files;

        if (!images || images.length < 1 || !Array.isArray(images))
            return res.status(400).send('No image was sent!');

        const data = JSON.parse(req.body.data);

        const { name, synopsis, releaseDate, language, countryId } = data;

        this.createMovieUseCase.execute({
            name,
            synopsis,
            releaseDate,
            language,
            countryId,
            images,
        });

        return res.sendStatus(201);
    }
}

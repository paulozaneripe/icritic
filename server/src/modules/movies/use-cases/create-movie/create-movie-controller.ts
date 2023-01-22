import { CreateMovieUseCase } from '@src/modules/movies/use-cases/create-movie/create-movie-use-case';
import { Request, Response } from 'express';

export class CreateMovieController {
    constructor(private createMovieUseCase: CreateMovieUseCase) {}

    handle(req: Request, res: Response): Response {
        const { name, synopsis, releaseDate, language, countryId } = req.body;

        this.createMovieUseCase.execute({
            name,
            synopsis,
            releaseDate,
            language,
            countryId,
        });

        return res.sendStatus(201);
    }
}

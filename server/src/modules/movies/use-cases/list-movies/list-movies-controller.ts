import { ListMoviesUseCase } from '@src/modules/movies/use-cases/list-movies/list-movies-use-case';
import { Request, Response } from 'express';

export class ListMoviesController {
    constructor(private listMoviesUseCase: ListMoviesUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const movies = await this.listMoviesUseCase.execute();

        return res.status(200).json({ movies });
    }
}

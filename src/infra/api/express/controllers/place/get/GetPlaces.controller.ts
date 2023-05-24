import GetPlacesUsecase from 'application/usecase/place/get/GetPlaces.usecase';
import { Request, Response } from 'express';
import PlaceRepository from 'infra/database/prisma/repositories/place/Place.repository';

export default class GetPlacesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getPlacesUseCase = new GetPlacesUsecase(new PlaceRepository());
    const output = await getPlacesUseCase.execute();
    return res.status(200).send(output);
  }
}

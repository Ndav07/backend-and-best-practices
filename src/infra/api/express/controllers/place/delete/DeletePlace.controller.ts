import DeletePlaceUsecase from 'application/usecase/place/delete/DeletePlace.usecase';
import { Request, Response } from 'express';
import PlaceRepository from 'infra/database/prisma/repositories/place/Place.repository';
import { z } from 'zod';

export default class DeletePlaceController {
  async handle(req: Request, res: Response): Promise<Response> {
    const bodySchema = z.object({
      id: z.string().min(1, { message: 'Id is required.' }),
    });
    const { id } = bodySchema.parse(req.body);
    const deletePlaceUseCase = new DeletePlaceUsecase(new PlaceRepository());
    await deletePlaceUseCase.execute(id);
    return res.status(200).send();
  }
}

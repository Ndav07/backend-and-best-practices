import UpdatePlaceUsecase from 'application/usecase/place/update/UpdatePlace.usecase';
import { Request, Response } from 'express';
import PlaceRepository from 'infra/database/prisma/repositories/place/Place.repository';
import { z } from 'zod';

export default class UpdatePlaceController {
  async handle(req: Request, res: Response): Promise<Response> {
    const bodySchema = z.object({
      id: z.string().min(1, { message: 'Id is required.' }),
      name: z
        .string()
        .min(4, { message: 'Name must have minimum 4 characters.' }),
      description: z.string().min(1, { message: 'Description is required.' }),
      category: z.enum(['RESTAURANT', 'HOTEL', 'FREEAIR', 'CHURCH'], {
        errorMap: () => ({ message: 'Category not found.' }),
      }),
      images: z
        .string()
        .array()
        .nonempty({ message: 'Must have minimun 1 image' }),
      street: z.string().min(1, { message: 'Street is required.' }),
      city: z.string().min(1, { message: 'City is required.' }),
      number: z
        .string()
        .min(1, { message: 'Number must have minimun 1 characters.' })
        .optional(),
      zip: z
        .string()
        .min(8, { message: 'Zip must have minimun 8 characters.' })
        .optional(),
      phone: z
        .string()
        .min(1, { message: 'Phone must have minimun 1 characters.' })
        .optional(),
      curiosities: z
        .string()
        .min(1, { message: 'Number must have minimun 1 characters.' })
        .optional(),
      open_hour: z
        .string()
        .datetime({
          message: 'Open hour must be in the format datetime string.',
        })
        .optional(),
      close_hour: z
        .string()
        .datetime({
          message: 'Close hour must be in the format datetime string.',
        })
        .optional(),
      menu: z
        .string()
        .array()
        .min(1, { message: 'Must have minimun 1 image' })
        .optional(),
    });
    const values = bodySchema.parse(req.body);
    const updatePlaceUseCase = new UpdatePlaceUsecase(new PlaceRepository());
    await updatePlaceUseCase.execute(values);
    return res.status(200).send();
  }
}

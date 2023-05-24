import PlaceRepositoryInterface, {
  InputCreate,
  InputUpdate,
} from 'domain/place/repository/Place.repository.interface';
import { prisma } from '../../../../../shared/lib/prisma';
import { Place } from '@prisma/client';

export default class PlaceRepository implements PlaceRepositoryInterface {
  async create({
    name,
    description,
    category,
    images,
    street,
    city,
    number,
    zip,
    phone,
    curiosities,
    open_hour,
    close_hour,
    menu,
  }: InputCreate): Promise<void> {
    await prisma.place.create({
      data: {
        name,
        description,
        category,
        images,
        street,
        city,
        number,
        zip,
        phone,
        curiosities,
        open_hour,
        close_hour,
        menu,
      },
    });
  }

  async getById(id: string): Promise<Place | null> {
    const place = await prisma.place.findUnique({ where: { id } });
    return place;
  }

  async getAll(): Promise<Place[]> {
    const output = await prisma.place.findMany();
    return output;
  }

  async delete(id: string): Promise<void> {
    await prisma.place.delete({ where: { id } });
  }

  async update({
    id,
    name,
    description,
    category,
    images,
    street,
    city,
    number,
    zip,
    phone,
    curiosities,
    open_hour,
    close_hour,
    menu,
  }: InputUpdate): Promise<void> {
    await prisma.place.update({
      where: { id },
      data: {
        name,
        description,
        category,
        images,
        street,
        city,
        number,
        zip,
        phone,
        curiosities,
        open_hour,
        close_hour,
        menu,
      },
    });
  }
}

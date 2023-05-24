import { Place } from '@prisma/client';

export interface InputCreate {
  name: string;
  description: string;
  category: 'RESTAURANT' | 'HOTEL' | 'FREEAIR' | 'CHURCH';
  images: string[];
  street: string;
  city: string;
  number?: string;
  zip?: string;
  phone?: string;
  curiosities?: string;
  open_hour?: string;
  close_hour?: string;
  menu?: string[];
}

export interface InputUpdate {
  id: string;
  name: string;
  description: string;
  category: 'RESTAURANT' | 'HOTEL' | 'FREEAIR' | 'CHURCH';
  images: string[];
  street: string;
  city: string;
  number?: string;
  zip?: string | null;
  phone?: string | null;
  curiosities?: string | null;
  open_hour?: string | null;
  close_hour?: string | null;
  menu?: string[] | [];
}

export default interface PlaceRepositoryInterface {
  create({
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
  }: InputCreate): Promise<void>;

  getById(id: string): Promise<Place | null>;

  getAll(): Promise<Place[]>;

  delete(id: string): Promise<void>;

  update({
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
  }: InputUpdate): Promise<void>;
}

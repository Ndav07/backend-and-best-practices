export interface InputUpdatePlaceDto {
  id: string;
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

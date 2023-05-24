type Place = {
  id: string;
  name: string;
  description: string;
  category: string;
  images: string[];
  street: string;
  city: string;
  number: string | null;
  zip: string | null;
  phone: string | null;
  curiosities: string | null;
  open_hour: Date | null;
  close_hour: Date | null;
  menu: string[] | null;
};

export interface OutputGetPlacesDto {
  places: Place[];
}

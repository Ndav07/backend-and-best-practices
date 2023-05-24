import PlaceRepositoryInterface from 'domain/place/repository/Place.repository.interface';
import { OutputGetPlacesDto } from './GetPlaces.dto';

export default class GetPlacesUsecase {
  constructor(private placeRepository: PlaceRepositoryInterface) {}
  async execute(): Promise<OutputGetPlacesDto> {
    const result = await this.placeRepository.getAll();
    return {
      places: result.map((place) => ({
        id: place.id,
        name: place.name,
        description: place.description,
        category: place.category,
        images: place.images,
        street: place.street,
        city: place.city,
        number: place.number,
        zip: place.zip,
        phone: place.phone,
        curiosities: place.curiosities,
        open_hour: place.open_hour,
        close_hour: place.close_hour,
        menu: place.menu,
      })),
    };
  }
}

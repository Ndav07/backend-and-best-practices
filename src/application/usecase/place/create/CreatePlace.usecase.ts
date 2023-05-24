import PlaceRepositoryInterface from 'domain/place/repository/Place.repository.interface';
import { InputCreatePlaceDto } from './CreatePlace.dto';

export default class CreatePlaceUsecase {
  constructor(private placeRepository: PlaceRepositoryInterface) {}
  async execute(values: InputCreatePlaceDto): Promise<void> {
    await this.placeRepository.create(values);
  }
}

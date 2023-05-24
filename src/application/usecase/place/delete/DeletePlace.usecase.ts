import PlaceRepositoryInterface from 'domain/place/repository/Place.repository.interface';

export default class DeletePlaceUsecase {
  constructor(private placeRepository: PlaceRepositoryInterface) {}
  async execute(id: string): Promise<void> {
    await this.placeRepository.delete(id);
  }
}

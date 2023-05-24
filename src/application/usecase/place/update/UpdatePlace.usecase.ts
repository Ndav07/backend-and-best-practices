import PlaceRepositoryInterface from 'domain/place/repository/Place.repository.interface';
import { InputUpdatePlaceDto } from './UpdatePlace.dto';
import Address from 'domain/place/entity/value-object/Address';
import Place from 'domain/place/entity/Place';
import { AppError } from 'shared/errors/AppError';

export default class UpdatePlaceUsecase {
  constructor(private placeRepository: PlaceRepositoryInterface) {}
  async execute({
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
  }: InputUpdatePlaceDto): Promise<void> {
    const place = await this.placeRepository.getById(id);
    if (!place) {
      throw new AppError('Place not exists', 404);
    }

    const newAddress = new Address(street, city, number, zip);

    const newPlace = new Place(
      place.id,
      place.name,
      place.description,
      newAddress,
      place.category,
      place.images,
      place.phone,
      place.curiosities,
      place.open_hour?.getDate().toString(),
      place.close_hour?.getDate().toString(),
      place.menu
    );

    newPlace.changeName(name);
    newPlace.changeDescription(description);
    newPlace.changeAddress(newAddress);
    newPlace.changeImages(images);
    newPlace.changeCategory(category);
    newPlace.changePhone(phone ?? null);
    newPlace.changeCuriosities(curiosities ?? null);
    newPlace.changeOpenHour(open_hour ?? null);
    newPlace.changeCloseHour(close_hour ?? null);
    newPlace.changeMenu(menu ?? null);

    await this.placeRepository.update({
      id: newPlace.getId(),
      name: newPlace.getName(),
      description: newPlace.getDescription(),
      category: newPlace.getCategory(),
      images: newPlace.getImages(),
      street: newPlace.getAddress().getStreet(),
      city: newPlace.getAddress().getCity(),
      number: newPlace.getAddress().getNumber(),
      zip: newPlace.getAddress().getZip() || null,
      phone: newPlace.getPhone() || null,
      curiosities: newPlace.getCuriosities() || null,
      open_hour: newPlace.getOpenHours() || null,
      close_hour: newPlace.getCloseHours() || null,
      menu: newPlace.getMenu() || [],
    });
  }
}

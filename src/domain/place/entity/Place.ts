import Address from './value-object/Address';

export default class Place {
  constructor(
    private id: string,
    private name: string,
    private description: string,
    private address: Address,
    private category: 'RESTAURANT' | 'HOTEL' | 'FREEAIR' | 'CHURCH',
    private images: string[],
    private phone?: string | null,
    private curiosities?: string | null,
    private open_hour?: string | null,
    private close_hour?: string | null,
    private menu?: string[] | null
  ) {
    (this.id = id),
      (this.name = name),
      (this.description = description),
      (this.phone = phone),
      (this.curiosities = curiosities),
      (this.address = address),
      (this.category = category),
      (this.images = images),
      (this.open_hour = open_hour),
      (this.close_hour = close_hour),
      (this.menu = menu);
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPhone(): string | undefined {
    if (this.phone) {
      return this.phone;
    }
  }

  getCuriosities(): string | undefined {
    if (this.curiosities) {
      return this.curiosities;
    }
  }

  getAddress(): Address {
    return this.address;
  }

  getCategory(): 'RESTAURANT' | 'HOTEL' | 'FREEAIR' | 'CHURCH' {
    return this.category;
  }

  getImages(): string[] {
    return this.images;
  }

  getOpenHours(): string | undefined {
    if (this.open_hour) {
      return this.open_hour;
    }
  }

  getCloseHours(): string | undefined {
    if (this.close_hour) {
      return this.close_hour;
    }
  }

  getMenu(): string[] | undefined {
    if (this.menu) {
      return this.menu;
    }
  }

  changeName(name: string): void {
    this.name = name;
  }

  changeDescription(description: string): void {
    this.description = description;
  }

  changePhone(phone: string | null): void {
    this.phone = phone;
  }

  changeCategory(
    category: 'RESTAURANT' | 'HOTEL' | 'FREEAIR' | 'CHURCH'
  ): void {
    this.category = category;
  }

  changeCuriosities(curiosities: string | null): void {
    this.curiosities = curiosities;
  }

  changeAddress(address: Address): void {
    this.address = address;
  }

  changeOpenHour(open_hour: string | null): void {
    this.open_hour = open_hour;
  }

  changeCloseHour(close_hour: string | null): void {
    this.close_hour = close_hour;
  }

  changeImages(imagens: string[]): void {
    this.images = imagens;
  }

  changeMenu(menu: string[] | null): void {
    this.menu = menu;
  }
}

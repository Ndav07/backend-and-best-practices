export default class Address {
  constructor(
    private street: string,
    private city: string,
    private number?: string | null,
    private zip?: string | null
  ) {
    this.street = street;
    this.number = number;
    this.zip = zip;
    this.city = city;
    this.validate();
  }

  validate(): void {
    if (this.street.length === 0) {
      throw new Error('Street is required');
    }
    if (this.number && this.number.length === 0) {
      throw new Error('Number is required');
    }
    if (this.zip && this.zip.length === 0) {
      throw new Error('Zip is required');
    }
    if (this.city.length === 0) {
      throw new Error('City is required');
    }
  }

  getStreet(): string {
    return this.street;
  }

  getNumber(): string | undefined {
    if (this.number) {
      return this.number;
    }
  }

  getZip(): string | undefined {
    if (this.zip) {
      return this.zip;
    }
  }

  getCity(): string {
    return this.city;
  }
}

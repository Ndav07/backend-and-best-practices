import Place from './Place';
import Address from './value-object/Address';

describe('Test unit Place', () => {
  it('must be able to return id', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'FREEAIR',
      ['imagem1', 'imagem2', 'imagem3']
    );
    expect(place.getId()).toEqual('123');
  });

  it('must be able to return name', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'FREEAIR',
      ['imagem1', 'imagem2', 'imagem3']
    );
    expect(place.getName()).toEqual('Morro dos Aventureiros');
  });

  it('must be able to return description', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'FREEAIR',
      ['imagem1', 'imagem2', 'imagem3']
    );
    expect(place.getDescription()).toEqual('descrição');
  });

  it('must be able to return address', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'FREEAIR',
      ['imagem1', 'imagem2', 'imagem3']
    );
    expect(place.getAddress()).toEqual(address);
  });

  it('must be able to return category', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'FREEAIR',
      ['imagem1', 'imagem2', 'imagem3']
    );
    expect(place.getCategory()).toEqual('FREEAIR');
  });

  it('must be able to return image path', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'FREEAIR',
      ['imagem1', 'imagem2', 'imagem3']
    );
    expect(place.getImages()).toEqual(['imagem1', 'imagem2', 'imagem3']);
  });

  it('must be able to return curiosities', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'FREEAIR',
      ['imagem1', 'imagem2', 'imagem3'],
      '92467532',
      'curiosities'
    );
    expect(place.getCuriosities()).toEqual('curiosities');
  });

  it('must be able to return open hour', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'RESTAURANT',
      ['imagem1', 'imagem2', 'imagem3'],
      '92467532',
      'curiosities',
      '2023-05-12T08:07:27.365Z',
      '2023-05-12T21:07:27.365Z',
      ['imagem1', 'imagem2', 'imagem3']
    );
    expect(place.getOpenHours()).toEqual('2023-05-12T08:07:27.365Z');
  });

  it('must be able to return close hour', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'RESTAURANT',
      ['imagem1', 'imagem2', 'imagem3'],
      '92467532',
      'curiosities',
      '2023-05-12T08:07:27.365Z',
      '2023-05-12T21:07:27.365Z',
      ['imagem1', 'imagem2', 'imagem3']
    );
    expect(place.getCloseHours()).toEqual('2023-05-12T21:07:27.365Z');
  });

  it('must be able to return image path of menu', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'RESTAURANT',
      ['imagem1', 'imagem2', 'imagem3'],
      '92467532',
      'curiosities',
      '2023-05-12T08:07:27.365Z',
      '2023-05-12T21:07:27.365Z',
      ['imagem1', 'imagem2', 'imagem3']
    );
    expect(place.getMenu()).toEqual(['imagem1', 'imagem2', 'imagem3']);
  });

  it('must be able to update name', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'FREEAIR',
      ['imagem1', 'imagem2', 'imagem3']
    );
    place.changeName('Morro dos updates');
    expect(place.getName()).toEqual('Morro dos updates');
  });

  it('must be able to update description', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'FREEAIR',
      ['imagem1', 'imagem2', 'imagem3']
    );
    place.changeDescription('update description');
    expect(place.getDescription()).toEqual('update description');
  });

  it('must be able to update curiosities', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'RESTAURANT',
      ['imagem1', 'imagem2', 'imagem3'],
      '92467532',
      'curiosities',
      '2023-05-12T08:07:27.365Z',
      '2023-05-12T21:07:27.365Z',
      ['imagem1', 'imagem2', 'imagem3']
    );
    place.changeCuriosities('update curiosities');
    expect(place.getCuriosities()).toEqual('update curiosities');
  });

  it('must be able to update address', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'RESTAURANT',
      ['imagem1', 'imagem2', 'imagem3'],
      '92467532',
      'curiosities',
      '2023-05-12T08:07:27.365Z',
      '2023-05-12T21:07:27.365Z',
      ['imagem1', 'imagem2', 'imagem3']
    );
    const newAdress = new Address(
      'rua atualizada',
      'Juazeiro',
      '345',
      '63195-000'
    );
    place.changeAddress(newAdress);
    expect(place.getAddress()).toEqual(newAdress);
  });

  it('must be able to update open hour', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'RESTAURANT',
      ['imagem1', 'imagem2', 'imagem3'],
      '92467532',
      'curiosities',
      '2023-05-12T08:07:27.365Z',
      '2023-05-12T21:07:27.365Z',
      ['imagem1', 'imagem2', 'imagem3']
    );
    place.changeOpenHour('2023-05-12T09:07:27.365Z');
    expect(place.getOpenHours()).toEqual('2023-05-12T09:07:27.365Z');
  });

  it('must be able to update close hour', () => {
    const address = new Address('rua teste', 'Juazeiro');
    const place = new Place(
      '123',
      'Morro dos Aventureiros',
      'descrição',
      address,
      'RESTAURANT',
      ['imagem1', 'imagem2', 'imagem3'],
      '92467532',
      'curiosities',
      '2023-05-12T08:07:27.365Z',
      '2023-05-12T21:07:27.365Z',
      ['imagem1', 'imagem2', 'imagem3']
    );
    place.changeCloseHour('2023-05-12T20:07:27.365Z');
    expect(place.getCloseHours()).toEqual('2023-05-12T20:07:27.365Z');
  });
});

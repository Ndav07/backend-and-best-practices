import User from './User';

describe('Test unit User', () => {
  let user: User;

  beforeAll(() => {
    user = new User('1234', 'Name', 'nikollas@teste.com', 'ADMIN');
  });

  it('must be able to return id', () => {
    expect(user.getId()).toEqual('1234');
  });

  it('must be able to return name', () => {
    expect(user.getName()).toEqual('Name');
  });

  it('must be able to return email', () => {
    expect(user.getEmail()).toEqual('nikollas@teste.com');
  });

  it('should be able to verify if it is admin', () => {
    expect(user.getRole()).toEqual('ADMIN');
  });
});

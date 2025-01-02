import { AuthData } from '../types';
import { internet } from 'faker';

const makeFakeAuthData = (): AuthData => {
  return {
    login: internet.email(),
    password: internet.password(),
  }
}

export default makeFakeAuthData;
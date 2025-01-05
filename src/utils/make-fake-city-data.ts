import { CityData } from '../types';
import makeFakeLocation from './make-fake-location';

const makeFakeCityData = (): CityData => ({
  name: 'Paris',
  location: makeFakeLocation(),
});

export default makeFakeCityData;

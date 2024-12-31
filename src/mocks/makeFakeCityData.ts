import { CityData } from '../types';
import makeFakeLocation from './makeFakeLocation';

const makeFakeCityData = (): CityData => { 
  return {
    name: 'Paris',
    location: makeFakeLocation(),
  }
}

export default makeFakeCityData;

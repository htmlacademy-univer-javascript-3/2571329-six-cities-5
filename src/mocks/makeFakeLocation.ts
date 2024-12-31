import { address } from 'faker';

type TLocation = {
  latitude: number,
  longitude: number,
}

const makeFakeLocation = (): TLocation => { 
  return {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
  }
};

export default makeFakeLocation;
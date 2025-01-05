import { helpers, image, datatype } from 'faker';
import { offerCard } from '../types';
import makeFakeLocation from './make-fake-location';
import makeFakeCityData from './make-fake-city-data';
import makeFakeUserData from './make-fake-user-data';

const makeFakeOffer = (): offerCard => ({
  id: datatype.uuid(),
  previewImage: image.imageUrl(),
  price: datatype.number(),
  rating: datatype.number(),
  title: helpers.randomize(),
  type: helpers.randomize(),
  isFavorite: true,
  isPremium: true,
  location: makeFakeLocation(),
  images: new Array(3).fill(null).map(() => (image.imageUrl())),
  bedrooms: datatype.number(),
  maxAdults: datatype.number(),
  city: makeFakeCityData(),
  description: new Array(3).fill(null).map(() => (helpers.randomize())),
  goods: new Array(3).fill(null).map(() => (helpers.randomize())),
  host: makeFakeUserData(),
});

export default makeFakeOffer;

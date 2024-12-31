import { changeSelectedCity, offerReducer, setOfferError } from './offerSlice';
import { CITIES } from '../../types/cities';

describe('Offer Reducer', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      currentCity: CITIES[0],
      cities: CITIES,
      offers: [],
      offersLoading: false,
      error: null,
      offer: null,
      offerLoading: false,
      nearOffers: [],
      nearOffersLoading: false,
      reviews: [],
      reviewsLoading: false,
    }

    const resultState = offerReducer(expectedState, emptyAction);

    expect(resultState).toEqual(expectedState);
  });

  it('should return default initial state with undefined and empty action', () => {
      const emptyAction = { type: '' };
      const expectedState = {
        currentCity: CITIES[0],
        cities: CITIES,
        offers: [],
        offersLoading: false,
        error: null,
        offer: null,
        offerLoading: false,
        nearOffers: [],
        nearOffersLoading: false,
        reviews: [],
        reviewsLoading: false,
      }
  
      const resultState = offerReducer( undefined, emptyAction);
  
      expect(resultState).toEqual(expectedState);
    });

  it('should return new  value of current city from state', () => {
    const initialState = {
      currentCity: CITIES[0],
      cities: CITIES,
      offers: [],
      offersLoading: false,
      error: null,
      offer: null,
      offerLoading: false,
      nearOffers: [],
      nearOffersLoading: false,
      reviews: [],
      reviewsLoading: false,
    }
      const expectedState = {
        currentCity: CITIES[2],
        cities: CITIES,
        offers: [],
        offersLoading: false,
        error: null,
        offer: null,
        offerLoading: false,
        nearOffers: [],
        nearOffersLoading: false,
        reviews: [],
        reviewsLoading: false,
      }
  
      const resultState = offerReducer(initialState, changeSelectedCity(CITIES[2]));
  
      expect(resultState).toEqual(expectedState);
    });

    it('should return new  value of current city from state', () => {
    const initialState = {
      currentCity: CITIES[0],
      cities: CITIES,
      offers: [],
      offersLoading: false,
      error: null,
      offer: null,
      offerLoading: false,
      nearOffers: [],
      nearOffersLoading: false,
      reviews: [],
      reviewsLoading: false,
    };
    const customError = '404. Not found';
    const expectedState = {
      currentCity: CITIES[0],
      cities: CITIES,
      offers: [],
      offersLoading: false,
      error: customError,
      offer: null,
      offerLoading: false,
      nearOffers: [],
      nearOffersLoading: false,
      reviews: [],
      reviewsLoading: false,
    }
  
    const resultState = offerReducer(initialState, setOfferError(customError));
  
    expect(resultState).toEqual(expectedState);
  });
});

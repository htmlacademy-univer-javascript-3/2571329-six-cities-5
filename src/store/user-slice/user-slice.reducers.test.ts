import makeFakeOffer from '../../mocks/makeFakeOffer';
import makeFakeUserData from '../../mocks/makeFakeUserData';
import { AuthorizationStatus } from '../../types';
import { setUserError, userReducer } from './userSlice';

describe('User Reducer', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      error: '404. Not Found',
      authorizationStatus: AuthorizationStatus.UnKnown,
      userData: makeFakeUserData(),
      loading: false,
      favoriteOffers: new Array(3).fill(null).map(() => makeFakeOffer()),
    }

    const resultState = userReducer(expectedState, emptyAction);

    expect(resultState).toEqual(expectedState);
  });

  it('should return default initial state with undefined and empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      error: null,
      authorizationStatus: AuthorizationStatus.UnKnown,
      userData: null,
      loading: false,
      favoriteOffers: [],
    }

    const resultState = userReducer( undefined, emptyAction);

    expect(resultState).toEqual(expectedState);
  });

  it('should return new value of error from state', () => {
    const initialState = {
      error: null,
      authorizationStatus: AuthorizationStatus.UnKnown,
      userData: null,
      loading: false,
      favoriteOffers: [],
    };
    const customError = '404. Not found';
    const expectedState = {
      error: customError,
      authorizationStatus: AuthorizationStatus.UnKnown,
      userData: null,
      loading: false,
      favoriteOffers: [],
    }

    const resultState = userReducer(initialState, setUserError(customError));

    expect(resultState).toEqual(expectedState);
  });
});

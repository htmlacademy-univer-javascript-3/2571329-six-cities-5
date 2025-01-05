import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user-slice/user-slice';
import { offerReducer } from './offer-slice/offer-slice';
import { NameSpace } from '../types';

export const rootReducer = combineReducers({
  [NameSpace.USER]: userReducer,
  [NameSpace.OFFER]: offerReducer,
});

import { ReviewData } from '../types';
import { helpers, datatype } from 'faker';

const makeFakeNewReviewData = (): ReviewData => {
  return {
    id: datatype.uuid(),
    rating: datatype.number(),
    review: helpers.randomize(),
  };
}

export default makeFakeNewReviewData;

import { render, screen } from '@testing-library/react';
import { ListReviews } from './list-reviews.tsx';
import makeFakeReview from '../../utils/make-fake-reviews.ts';

describe('Component: ListReview', () => {
  it('should render correctly', () => {
    const reviewListTestId = 'reviews-list';
    const reviewTitleTestId = 'reviews-title';
    const fakeReviewsList = new Array(3).fill(null).map(() => makeFakeReview());
    const expectedText = /Reviews/i;
    const expectedCountReviews = fakeReviewsList.length.toString();

    render(<ListReviews reviews={fakeReviewsList}/>);

    const reviewList = screen.getByTestId(reviewListTestId);
    const reviewTitle = screen.getByTestId(reviewTitleTestId);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(reviewList).toBeInTheDocument();
    expect(reviewTitle).toHaveTextContent(expectedCountReviews);
  });
});

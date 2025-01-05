import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mocks/mock-components';
import NotFound from './not-found';

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const expectedText = 'Not Found 404.';
    const expectedLinkText = 'На главную страницу';

    render(withHistory(<NotFound />));

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});

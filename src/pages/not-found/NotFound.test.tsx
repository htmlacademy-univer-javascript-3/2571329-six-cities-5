import { render, screen } from '@testing-library/react';
import { withHistory } from '../../mocks/mockComponents';
import NotFound from "./NotFound";

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const expectedText = 'Not Found 404.';
    const expectedLinkText = 'На главную страницу';

    render(withHistory(<NotFound />));

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});

import Favorites from './favorites';
import { withStore, withHistory } from '../../utils/mocks/mock-components';
import { screen, render } from '@testing-library/react';
import makeFakeOffer from '../../utils/make-fake-offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import makeFakeUserData from '../../utils/make-fake-user-data';
import { AuthorizationStatus, NameSpace } from '../../types/index';
import { mockUserInitialState, SelectorFunction } from '../../utils/mocks/mocks';

vi.mock('../../hooks', () => ({
  useAppDispatch: vi.fn(),
  useAppSelector: vi.fn(),
}));

describe('Component: FavouritePage', () => {
  const fakeFavoriteOffers = [makeFakeOffer()];
  const fakeUserData = makeFakeUserData();
  const mockDispatch = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useAppSelector as jest.Mock).mockImplementation((selector: SelectorFunction) => {
      if (selector.name === 'selectUserFavoritesData') {
        return fakeFavoriteOffers;
      }
      if (selector.name === 'selectUserData') {
        return fakeUserData;
      }
      return null;
    });
  });

  it('should render correctly with favorite offers !== 0', () => {
    const {withStoreComponent} = withStore(<Favorites />, {
      [NameSpace.USER]: {
        ...mockUserInitialState,
        authorizationStatus: AuthorizationStatus.Auth,
        userData: fakeUserData,
      }
    });
    const preparedComponent = withHistory(withStoreComponent,);

    render(preparedComponent);
    const cards = screen.getAllByTestId('offer-card');

    expect(cards).toHaveLength(fakeFavoriteOffers.length);
  });

  it('should render correctly with favorite offers empty', () => {
    (useAppSelector as jest.Mock).mockImplementation((selector: SelectorFunction) => {
      if (selector.name === 'selectUserFavoritesData') {
        return [];
      }
      return null;
    });
    const expectedText = /Favorites \(empty\)/i;
    const {withStoreComponent} = withStore(<Favorites />, {
      [NameSpace.USER]: {
        ...mockUserInitialState,
        authorizationStatus: AuthorizationStatus.Auth,
        userData: fakeUserData,
      }
    });
    const preparedComponent = withHistory(withStoreComponent,);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

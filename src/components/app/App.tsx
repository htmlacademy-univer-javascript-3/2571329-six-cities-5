import { useAppSelector } from '../../hooks';
import { Main } from '../../pages/main/Main';
import { AppRoute, AuthorizationStatus } from '../../types/index';
import { Login } from '../../pages/login/Login';
import { Favorites } from '../../pages/favorites/Favorites';
import { Offer } from '../../pages/offer/Offer';
import { NotFound } from '../../pages/not-found/NotFound';
import { PrivateRoute } from '../../components/private-router/PrivateRouter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { REVIEWS } from '../../mocks/reviews';
// import { CityData, offerCard } from '../../types';

// interface IAppProps {
//   offers: offerCard[];
//   currentCity: CityData;
// }

export const App: React.FC = () => {
  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);
  const cities = useAppSelector((state) => state.cities);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main offers={offers} currentCity={currentCity} cities={cities}/>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer reviews={REVIEWS} offers={offers} currentCity={currentCity}/>}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

import { useAppSelector } from '../../hooks';
import { useMemo } from 'react';
import Main from '../../pages/main/Main';
import { AppRoute } from '../../types/index';
import Login from '../../pages/login/Login';
import Favorites from '../../pages/favorites/Favorites';
import Offer from '../../pages/offer/Offer';
import NotFound from '../../pages/not-found/NotFound';
import { PrivateRoute } from '../../components/private-router/PrivateRouter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useInitApp } from '../../hooks/use-init-app';
import { selectCities, selectCurrentCity, selectOffersData } from '../../store/offer-slice/selectors';
import { selectAuthStatus } from '../../store/user-slice/selectors';

export const App: React.FC = () => {
  useInitApp();

  const city = useAppSelector(selectCurrentCity);
  const currentCity = useMemo(() => city, [city]);

  const offersList = useAppSelector(selectOffersData);
  const offers = useMemo(() => offersList, [offersList]);

  const citiesList = useAppSelector(selectCities);
  const cities = useMemo(() => citiesList, [citiesList]);

  const authStatus = useAppSelector(selectAuthStatus);
  const authorizationStatus = useMemo(() => authStatus, [authStatus]);
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
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={`${AppRoute.Offer}:id`}
          element={<Offer />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

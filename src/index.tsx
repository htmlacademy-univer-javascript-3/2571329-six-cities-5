import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoute, AuthorizationStatus } from './types';
import { App } from './components/app/App';
import { Login } from './pages/login/Login';
import { Favorites } from './pages/favorites/Favorites';
import { Offer } from './pages/offer/Offer';
import { NotFound } from './pages/not-found/NotFound';
import { PrivateRoute } from './components/private-router/PrivateRouter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OFFERS_CARDS, CITY } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <App
              offers={OFFERS_CARDS}
              currentCity={CITY}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={OFFERS_CARDS}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

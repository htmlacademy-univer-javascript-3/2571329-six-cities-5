import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoute, AuthorizationStatus, City, offerCard } from './types';
import { App } from './components/app/App';
import { Login } from './pages/login/Login';
import { Favorites } from './pages/favorites/Favorites';
import { Offer } from './pages/offer/Offer';
import { NotFound } from './pages/not-found/NotFound';
import { PrivateRoute } from './components/private-router/PrivateRouter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const CITY: City = 'Amsterdam';
const OFFERS_CARDS: offerCard[] = [
  {
    id: 1,
    img: 'img/appartment-01.jpg',
    category: 'Premium',
    price: 20,
    rating: 1,
    name: 'Test1',
    type: 'Apartament',
    inMarks: true,
  }, {
    id: 2,
    img: 'img/appartment-02.jpg',
    price: 30,
    rating: 2,
    name: 'Test2',
    type: 'Apartament',
    inMarks: false,
  }, {
    id: 3,
    img: 'img/appartment-03.jpg',
    price: 70,
    rating: 5,
    name: 'Test3',
    type: 'Room',
    inMarks: false,
  }
];

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
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
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
    {/* <App offers={OFFERS_CARDS} currentCity={CITY} />
    <Login />
    <Favorites />
    <Offer /> */}
  </React.StrictMode>
);

import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import makeFakeOffer from '../../utils/make-fake-offer.ts';
import makeFakeCityData from '../../utils/make-fake-city-data.ts';
import Map from './map-component.tsx';

describe('Component: Map Component', () => {
  it('renders a map container correctly', () => {
    const fakeOffersList = new Array(3).fill(null).map(() => makeFakeOffer());
    const fakeCityData = makeFakeCityData();

    render(
      <Map
        offers={fakeOffersList}
        currentCity={fakeCityData}
        activeOffer={null}
      />
    );
    const mapElement = screen.getByTestId('map');
    expect(mapElement).toBeInTheDocument();
  });
});

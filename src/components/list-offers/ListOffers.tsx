import React from 'react';
import { offerCard, CardClassNameList } from '../../types';
import { CityCard } from '../city-card/CityCard';

type ListOffersProps = {
  offers: offerCard[];
  cardClassName: CardClassNameList;
  activeOffer: number | null;
  setActiveOffer?: ((id: number | null) => void) | null;
}

export const ListOffers: React.FC<ListOffersProps> = ({
  offers,
  cardClassName,
  setActiveOffer
}) => (
  offers.map((offer: offerCard) => (
    <CityCard
      key={offer.id}
      offer={offer}
      cardClassName={cardClassName}
      setActiveOffer={setActiveOffer ? setActiveOffer: null}
    />)
  )
);

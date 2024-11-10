import React from 'react';
import { offerCard, CardClassNameList } from '../../types';
import { CityCard } from '../city-card/CityCard';

type ListOffersProps = {
  offers: offerCard[];
  cardClassName: CardClassNameList;
}

export const ListOffers: React.FC<ListOffersProps> = ({
  offers,
  cardClassName,
}) => (
  offers.map((offer: offerCard) => <CityCard key={offer.id} offer={offer} cardClassName={cardClassName} />)
);

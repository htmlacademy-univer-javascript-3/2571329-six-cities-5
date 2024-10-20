import React from 'react';
import { offerCard } from '../../types';

type CityCardProps = {
  offer: offerCard;
};

const ACTIVE_MARK_BUTTON_CLASS = 'place-card__bookmark-button--active';

export const CityCard: React.FC<CityCardProps> = ({offer}) => (
  <article className="cities__card place-card">
    {offer.category && (
      <div className="place-card__mark">
        <span>{offer.category}</span>
      </div>
    )}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src={offer.img}
          width={260}
          height={200}
          alt="Place image"
        />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">{offer.price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button 
          ${offer.inMarks ? ACTIVE_MARK_BUTTON_CLASS : ''}`}
        type="button"
        >
          <svg className="place-card__bookmark-icon" width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${offer.rating * 20}%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{offer.name}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);

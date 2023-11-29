import { CardPreview } from './CardPreview';
import { ICard } from 'interfaces/ICard';

import React from 'react';

interface IPropType {
  cards: ICard[];
}

export const CardsList = ({ cards }: IPropType) => {
  return (
    <div className="cards-list">
      {cards.map((card: ICard) => (
        <CardPreview
          key={card._id}
          card={card}
          //   list={list}
          //   currListIdx={index}
          //   onUpdateBoard={onUpdateBoard}
        />
      ))}
    </div>
  );
};

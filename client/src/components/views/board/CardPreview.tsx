import { CardTitle } from './CardTitle';
import { ICard } from 'interfaces/ICard';

import React from 'react';

interface IPropType {
  card: ICard;
}

export const CardPreview = ({ card }: IPropType) => {
  const { title } = card;

  return (
    <div className="card-preview pointer">
      <div className="card-preview-main-content">
        <CardTitle title={title} />
      </div>
    </div>
  );
};

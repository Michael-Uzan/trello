import React from 'react';
import { ICard } from '../interfaces/ICard';

interface IPropType {
  card: ICard;
}

export const CardPreview = ({ card }: IPropType) => {
  return (
    <div>
      <div className="card-preview-content pointer">
        <div className="card-preview-main-content">
          <span className="card-preview-title">{card.title}</span>
        </div>
      </div>
    </div>
  );
};

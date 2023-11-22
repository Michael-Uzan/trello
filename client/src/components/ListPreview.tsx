import { CardList } from './CardList';
import { IList } from '../interfaces/IList';
import plus from '../assets/imgs/plus.svg';

import React from 'react';

interface IPropType {
  list: IList;
}

export const ListPreview = ({ list }: IPropType) => {
  return (
    <div className="list-wrapper">
      <div className="list-content flex direction-col">
        <div className="list-header flex">{list.title}</div>
        <div className="list-cards fancy-scrollbar">
          <CardList
            cards={list.cards}
            // currListIdx={currListIdx}
            // onUpdateBoard={onUpdateBoard}
          />

          <span className="add-card-container" onClick={() => {}}>
            <img src={plus} alt="" />
            {'Add a card'}
          </span>
        </div>
      </div>
    </div>
  );
};

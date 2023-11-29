import { ListTitle } from './ListTitle';
import { CardsList } from './CardsList';
import { IList } from 'interfaces/IList';

import React from 'react';
import { AddCardButton } from './AddCardButton';

interface IPropType {
  list: IList;
}

export const ListPreview = ({ list }: IPropType) => {
  const { title, cards } = list;

  return (
    <div className="list">
      <div className="list-content flex direction-col">
        <ListTitle title={title} />
        <div className="list-cards fancy-scrollbar">
          <CardsList
            cards={cards}
            // currListIdx={currListIdx}
            // onUpdateBoard={onUpdateBoard}
          />
          <AddCardButton />
        </div>
      </div>
    </div>
  );
};

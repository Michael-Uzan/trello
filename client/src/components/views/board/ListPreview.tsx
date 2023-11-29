import { ListTitle } from './ListTitle';
import { IList } from 'interfaces/IList';

import React from 'react';
import { AddCardButton } from './AddCardButton';
import { GenericList } from 'components/common/GenericList';
import { CardPreview } from './CardPreview';

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
          <GenericList
            className="cards-list"
            items={cards}
            renderItem={(card) => <CardPreview card={card} />}
          />
          <AddCardButton />
        </div>
      </div>
    </div>
  );
};

import { ListPreview } from './ListPreview';
import { IList } from 'interfaces/IList';

import React from 'react';

interface IPropType {
  lists: IList[];
}

export const Lists = ({ lists }: IPropType) => (
  <div className="flex">
    {lists.map((list) => (
      <ListPreview
        key={list._id}
        list={list}
        //   onUpdateBoard={onUpdateBoard}
      />
    ))}
  </div>
);

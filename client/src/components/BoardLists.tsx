import { ListPreview } from './ListPreview';
import { IList } from '../interfaces/IList';

import React from 'react';

interface IPropType {
  lists: IList[];
}

export const BoardLists = ({ lists }: IPropType) => (
  <div className="all-lists flex">
    {lists.map((list) => (
      <ListPreview
        key={list._id}
        list={list}
        //   onUpdateBoard={onUpdateBoard}
      />
    ))}
  </div>
);

import { BoardTitle } from './BoardTitle';
import { AddFavoriteButton } from './AddFavoriteButton';
import { BoardHeaderSection } from './BoardHeaderSection';

import React from 'react';

interface IPropType {
  title: string;
}

export const BoardHeader = ({ title }: IPropType) => (
  <div className="board-header flex align-center space-between wrap">
    <BoardHeaderSection leftSide>
      <BoardTitle title={title} />
      <AddFavoriteButton />
    </BoardHeaderSection>
    {/* <BoardHeaderSection>{'share'}</BoardHeaderSection> */}
  </div>
);

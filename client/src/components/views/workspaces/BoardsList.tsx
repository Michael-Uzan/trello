import { BoardPreview } from './BoardPreview';

import { IBoardPreview } from 'interfaces/IBoard';
import React from 'react';

interface IPropType {
  boards: IBoardPreview[];
}

export const BoardsList = ({ boards }: IPropType) => {
  return (
    <div>
      {boards.map((board) => (
        <BoardPreview key={board._id} board={board} />
      ))}
    </div>
  );
};

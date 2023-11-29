import { IBoardPreview } from 'interfaces/IBoard';

import React from 'react';

interface IPropType {
  board: IBoardPreview;
}

export const BoardPreview = ({ board }: IPropType) => {
  const { background, title } = board;

  return (
    <div
      className="board-preview"
      style={{
        background: background?.imgUrl
          ? `url(${background.imgUrl})`
          : background.color,
      }}
    >
      <div>{title}</div>
    </div>
  );
};

import { IBoardPreview } from 'interfaces/IBoard';

import React from 'react';
import { Link } from 'react-router-dom';

interface IPropType {
  board: IBoardPreview;
}

export const BoardPreview = ({ board }: IPropType) => {
  const { background, title, _id } = board;

  return (
    <Link
      className="board-preview pointer"
      style={{
        background: background?.imgUrl
          ? `url(${background.imgUrl})`
          : background.color,
        backgroundSize: 'cover',
      }}
      to={`/b/${_id}`}
    >
      <div className="board-preview-shadow" />
      <div className="board-preview-title">{title}</div>
    </Link>
  );
};

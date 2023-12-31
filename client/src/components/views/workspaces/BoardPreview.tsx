import classnames from 'classnames';
import { IconStar } from 'components/common/Icons';
import { IBoardPreview } from 'interfaces/IBoard';

import React from 'react';
import { Link } from 'react-router-dom';

interface IPropType {
  board: IBoardPreview;
}

export const BoardPreview = ({ board }: IPropType) => {
  const { _id, background, title, starred } = board;

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
      <div className="board-preview-title bold">{title}</div>
      <IconStar
        className={classnames('board-preview-star', starred ? 'active' : null)}
        full={starred}
        size={13}
      />
    </Link>
  );
};

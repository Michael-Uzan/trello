import { IconContext } from 'react-icons';
import { FiStar } from 'react-icons/fi';
import React from 'react';

export const AddFavoriteButton = () => {
  return (
    <button
      className="add-favorite-button board-btn active"
      // onClick={this.onToggleStarBoard}
    >
      <IconContext.Provider value={{ className: 'star-icon' }}>
        <FiStar />
      </IconContext.Provider>
    </button>
  );
};

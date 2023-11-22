import React from 'react';
import { IconContext } from 'react-icons';
import { FiStar } from 'react-icons/fi';
import close from '../assets/imgs/close-filter.svg';

interface IPropType {
  title: string;
}

export const BoardHeader = ({ title }: IPropType) => {
  return (
    <div className="board-header flex align-center space-between wrap">
      <div className="header-left flex align-center">
        <h1 className="board-btn header-title">{title}</h1>
        <button
          className="board-btn star active"
          // onClick={this.onToggleStarBoard}
        >
          <IconContext.Provider value={{ className: 'star-icon' }}>
            <FiStar />
          </IconContext.Provider>
        </button>
        <span className="board-header-divider"></span>
      </div>
      <div className="header-right flex">
        <div className="cards-count pointer flex align-center">
          <span
            // onClick={this.openSearchOnMenu}
            className="number-count"
          >
            search results
          </span>
          <span
            // onClick={this.resetSearch}
            className="close-filter-btn"
          >
            <img src={close} alt="close" />
          </span>
        </div>
      </div>
    </div>
  );
};

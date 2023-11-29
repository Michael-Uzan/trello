import plus from 'assets/imgs/plus.svg';

import React from 'react';

export const AddCardButton = () => {
  return (
    <div className="add-card-container" onClick={() => {}}>
      {/* change to svg */}
      <img src={plus} alt="" />
      {'Add a card'}
    </div>
  );
};

import classnames from 'classnames';
import React, { ReactNode } from 'react';

interface IPropType {
  children: ReactNode;
  leftSide?: boolean;
}

export const BoardHeaderSection = ({ children, leftSide }: IPropType) => (
  <div
    className={classnames(
      leftSide ? 'header-left' : 'header-right',
      'flex align-center',
    )}
  >
    {children}
    {leftSide ? LeftDivider : null}
  </div>
);

const LeftDivider = <span className="board-header-divider" />;

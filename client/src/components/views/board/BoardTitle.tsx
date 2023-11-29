import React from 'react';

interface IPropType {
  title: string;
}

export const BoardTitle = ({ title }: IPropType) => (
  <h1 className="board-title board-btn">{title}</h1>
);

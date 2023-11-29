import React from 'react';

interface IPropType {
  title: string;
}

export const ListTitle = ({ title }: IPropType) => {
  return (
    <div className="list-title flex">
      <h2>{title}</h2>
    </div>
  );
};

import React from 'react';

interface IPropType {
  title: string;
}

export const CardTitle = ({ title }: IPropType) => {
  return <div className="card-title">{title}</div>;
};

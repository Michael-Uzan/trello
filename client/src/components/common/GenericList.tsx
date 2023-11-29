import React, { Fragment, ReactNode } from 'react';

interface IWithId {
  _id: string;
}

interface IPropsType<T extends IWithId> {
  items: T[];
  // eslint-disable-next-line no-unused-vars
  renderItem: (item: T) => ReactNode;
  className: string;
}

export const GenericList = <T extends IWithId>({
  items,
  renderItem,
  className,
}: IPropsType<T>) => {
  return (
    <div className={className}>
      {items.map((item: T) => (
        <Fragment key={item._id}>{renderItem(item)}</Fragment>
      ))}
    </div>
  );
};

import React, { ReactNode } from 'react';

interface IPropType {
  children: ReactNode;
  loading?: boolean;
  error?: boolean;
}

export const LoaderWrapper = ({ children, loading, error }: IPropType) => {
  return loading ? (
    <div>{'loading'}</div>
  ) : error ? (
    <div>{'error'}</div>
  ) : (
    <div>{children}</div>
  );
};

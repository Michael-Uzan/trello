import React, { ReactNode } from 'react';

interface IPropType {
  children: ReactNode;
  loading?: boolean;
  error?: boolean;
  className?: string;
}

export const LoaderWrapper = ({
  className,
  children,
  loading,
  error,
}: IPropType) => {
  return loading ? (
    <div>{'loading'}</div>
  ) : error ? (
    <div>{'error'}</div>
  ) : (
    <div className={className}>{children}</div>
  );
};

import React from 'react';

interface IProsType {
  className?: string;
  size?: number;
  full?: boolean;
}

export const IconStar = ({ className, size, full }: IProsType) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill={full ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

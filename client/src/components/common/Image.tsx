import { useImage } from 'hooks/useImage';

import React, { memo, HTMLProps, FC } from 'react';

interface IPropsType extends HTMLProps<HTMLImageElement> {
  src: string;
  alt?: string;
  showSpinner?: boolean;
  onLoad?: () => void;
}

const Image: FC<IPropsType> = memo(function Image({
  src,
  alt = '',
  className,
  showSpinner,
  onLoad,
  ...props
}: IPropsType) {
  const imageObject = useImage(src);

  if (imageObject !== null) {
    return (
      <img
        className={className}
        src={src}
        alt={alt}
        onLoad={onLoad}
        {...props}
      />
    );
  }

  return showSpinner ? <Spinner /> : null;
});

export default Image;

const Spinner = () => (
  <div className="spinner">
    <div className="spinner-inner" />
    <div className="spinner-inner" />
    <div className="spinner-inner" />
    <div className="spinner-inner" />
  </div>
);

import React from 'react';

import './Loader.css';

import { LoadingImage } from '@/shared/assets';

type LoaderProps = {
  size: 'small' | 'large';
  label?: string;
};

export function Loader({
  size = 'large',
  label
}: LoaderProps): React.JSX.Element {
  return (
    <div className={`Loader Loader--${size}`}>
      <img
        className='Loader__Image'
        src={LoadingImage}
        alt=''
      />

      {label && <h3 className='Loader__Label'>{label}</h3>}
    </div>
  );
}

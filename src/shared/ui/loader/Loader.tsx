import React from 'react';

import loadingImage from '../../assets/loading.png';

import './Loader.css';

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
        src={loadingImage}
        alt=''
      />

      {label && <h3 className='Loader__Label'>{label}</h3>}
    </div>
  );
}

import React from 'react';

import styles from './Loader.module.scss';

import { LoadingImage } from '@/assets';
import { classNames } from '@/shared/helpers';

type LoaderProps = {
  size: 'small' | 'large';
  label?: string;
};

export function Loader({
  size = 'large',
  label
}: LoaderProps): React.JSX.Element {
  return (
    <div className={classNames(styles.Loader, styles[`Loader--${size}`])}>
      <img
        className={styles.Loader__Image}
        src={LoadingImage}
        alt=''
      />

      {label && <h3 className={styles.Loader__Label}>{label}</h3>}
    </div>
  );
}

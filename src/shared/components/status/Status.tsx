import styles from './Status.module.scss';

import { classNames } from '@/shared/helpers';
import type { CharacterStatus } from '@/shared/types';

interface StatusProps {
  status: CharacterStatus;
}

export function Status({ status }: StatusProps) {
  return (
    <span className={styles.Status}>
      {status}
      <span
        className={classNames(styles.Indicator, styles[`Indicator--${status}`])}
      />
    </span>
  );
}

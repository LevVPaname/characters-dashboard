import styles from './Status.module.scss';

import { STATUS_OPTIONS } from '@/shared/constants';
import { classNames } from '@/shared/helpers';
import type { CharacterStatus } from '@/shared/types';

interface StatusIndicatorProps {
  status: CharacterStatus;
}

export function StatusIndicator({ status }: StatusIndicatorProps) {
  return (
    <span
      className={classNames(styles.Indicator, styles[`Indicator--${status}`])}
    />
  );
}

interface StatusProps {
  status: CharacterStatus;
}

export function Status({ status }: StatusProps) {
  const statusLabel =
    STATUS_OPTIONS.find((option) => option.value === status)?.label ?? status;

  return (
    <span className={styles.Status}>
      {statusLabel}
      <StatusIndicator status={status} />
    </span>
  );
}

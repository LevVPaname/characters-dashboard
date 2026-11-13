import React, { useRef } from 'react';

import styles from './Input.module.scss';

import { XIcon } from '@/shared/assets';
import { classNames } from '@/shared/helpers';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: 'underlined' | 'bordered';
  size?: 'large' | 'small';
  icon?: React.ReactNode;
  className?: string;
}

export const Input = ({
  variant = 'bordered',
  size = 'large',
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={classNames(
        styles.Root,
        styles[variant],
        size === 'small' && styles.Small,
        props.className
      )}
    >
      {props.icon && <div className={styles.Icon}>{props.icon}</div>}
      <input
        ref={inputRef}
        className={styles.Input}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
      {props.value && (
        <XIcon
          className={styles.ClearButton}
          onClick={() => {
            props.onChange('');
          }}
        />
      )}
    </div>
  );
};

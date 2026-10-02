import React, { useRef } from 'react';

import styles from './Input.module.css';

import { XIcon } from '@/shared/assets';
import { classNames } from '@/shared/utils';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: 'underlined' | 'bordered';
  icon?: React.ReactNode;
  className?: string;
}

export const Input = ({ variant = 'bordered', ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={classNames(
        styles.Root,
        styles[variant],
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

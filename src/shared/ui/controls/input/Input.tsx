import React, { useRef } from 'react';

import { XIcon } from '../../../assets';
import { classNames } from '../../../utils';

import styles from './Input.module.css';

interface InputProps {
  value: string | undefined;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: 'underlined' | 'outlined';
  icon?: React.ReactNode;
  className?: string;
}

export const Input = ({ variant = 'outlined', ...props }: InputProps) => {
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

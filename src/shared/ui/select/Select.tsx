import React, { useEffect, useRef, useState } from 'react';

import ArrowDownIcon from '../../assets/arrow_down.svg?react';

import './Select.css';

type Option = {
  label: string;
  value: string;
};

interface SelectProps {
  options: Option[];
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  size?: 'large' | 'small';
  getOptionCustom?: (option: Option) => React.ReactNode;
}

function SelectOptionContent({
  option,
  getOptionCustom
}: {
  option: Option;
  getOptionCustom?: (option: Option) => React.ReactNode;
}) {
  return (
    <span className='Select__OptionContent'>
      <span className='Select__OptionLabel'>{option.label}</span>
      {getOptionCustom?.(option)}
    </span>
  );
}

function Select({
  options,
  value = undefined,
  placeholder = 'Select',
  size = 'large',
  onChange,
  getOptionCustom
}: SelectProps): React.JSX.Element {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!selectRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (nextValue: string) => {
    setIsOpen(false);
    onChange(nextValue);
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleSelect('');
  };

  return (
    <div
      className={`Select Select--${size}`}
      ref={selectRef}
    >
      <div
        role='button'
        tabIndex={0}
        className='Select__Trigger'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption ? (
          <SelectOptionContent
            option={selectedOption}
            getOptionCustom={getOptionCustom}
          />
        ) : (
          placeholder
        )}

        <div className='Select__Actions'>
          {selectedOption && (
            <button
              className='Select__ResetButton'
              type='button'
              onClick={handleReset}
              aria-label='clear value'
            >
              ×
            </button>
          )}
          <ArrowDownIcon
            className={`Select__Arrow ${isOpen ? 'Select__Arrow--open' : ''}`}
          />
        </div>
      </div>

      {isOpen && (
        <ul className='Select__Options'>
          {options.map((option) => (
            <li
              key={option.value}
              className='Select__Option'
            >
              <button
                type='button'
                className='Select__OptionButton'
                onClick={() => handleSelect(option.value)}
              >
                <SelectOptionContent
                  option={option}
                  getOptionCustom={getOptionCustom}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { Select };

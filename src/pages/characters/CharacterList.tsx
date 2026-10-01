import { useState } from 'react';

import { Link } from 'react-router';

import Image from '../../shared/assets/R_n_M_page_logo.png';
import StarIcon from '../../shared/assets/star.svg?react';
import { Input } from '../../shared/ui/controls';
import { Select } from '../../shared/ui/select/Select';

import styles from './CharacterList.module.css';

export function CharacterList() {
  const [selected, setSelected] = useState<string>();
  const [inputValue, setInputValue] = useState<string>();
  return (
    <div className={styles.CharacterList}>
      <img
        className={styles.CharacterList__Image}
        src={Image}
        alt=''
      />
      <p>Здесь будет список персонажей.</p>
      <Link to='/characters/1'>Открыть персонажа #1</Link>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: '20px',
          width: '200px'
        }}
      >
        <Select
          onChange={setSelected}
          value={selected}
          options={[
            { label: 'Чел', value: '111' },
            { label: 'Моб', value: '222' },
            { label: 'Босс', value: '333' }
          ]}
          getOptionCustom={(option) => (
            <span style={{ color: option.value === '111' ? 'red' : 'black' }}>
              {option.label}
            </span>
          )}
        />

        <Select
          onChange={setSelected}
          size='small'
          value={selected}
          options={[
            { label: 'Чел', value: '111' },
            { label: 'Моб', value: '222' },
            { label: 'Босс', value: '333' }
          ]}
          getOptionCustom={(option) => (
            <span style={{ color: option.value === '111' ? 'red' : 'black' }}>
              {option.label}
            </span>
          )}
        />

        <Input
          icon={<StarIcon />}
          value={inputValue}
          onChange={setInputValue}
        />
        <Input
          value={inputValue}
          onChange={setInputValue}
          variant='underlined'
        />
        <Input
          className={styles.CharacterList__Input}
          value={inputValue}
          onChange={setInputValue}
          variant='underlined'
        />
      </div>
    </div>
  );
}

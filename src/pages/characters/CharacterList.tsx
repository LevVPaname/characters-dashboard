import { useState } from 'react';
import { Link } from 'react-router';

import styles from './CharacterList.module.scss';

import { RickAndMortyPageLogo, StarIcon } from '@/assets';
import { Input } from '@/shared/components/controls';
import { Select } from '@/shared/components/select/Select';
import type { Character } from '@/shared/types';
import { CharacterCard } from '@/widgets/character-card';

const mockCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth (C-137)', url: '' },
  location: { name: 'Earth', url: '' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [],
  url: '',
  created: ''
};

export function CharacterList() {
  const [selected, setSelected] = useState<string>();
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles.CharacterList}>
      <img
        className={styles.CharacterList__Image}
        src={RickAndMortyPageLogo}
        alt=''
      />
      <p>Здесь будет список персонажей.</p>
      <Link to='/characters/1'>Открыть персонажа #1</Link>

      <div className={styles.CharacterList__Card}>
        <CharacterCard character={mockCharacter} />
      </div>

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

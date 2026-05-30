import React, { useState } from 'react';
import { Link } from 'react-router';

import Image from '../../shared/assets/R_n_M_page_logo.png';
import { Select } from '../../shared/ui/select/Select';

import './CharacterList.css';

export function CharacterList() {
  const [selected, setSelected] = useState<string>();
  return (
    <div className='CharacterList'>
      <img
        className='CharacterList__Image'
        src={Image}
        alt=''
      />
      <p>Здесь будет список персонажей.</p>
      <Link to='/characters/1'>Открыть персонажа #1</Link>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
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
      </div>
    </div>
  );
}

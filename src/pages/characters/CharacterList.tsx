import { Link } from 'react-router';

import Image from '../../shared/assets/R_n_M_page_logo.png';

import './CharacterList.css';

export function CharacterList() {
  return (
    <div className='CharacterList'>
      <img
        className='CharacterList__Image'
        src={Image}
        alt=''
      />
      <p>Здесь будет список персонажей.</p>
      <Link to='/characters/1'>Открыть персонажа #1</Link>
    </div>
  );
}

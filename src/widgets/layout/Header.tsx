import { Link } from 'react-router';

import LogoIcon from '../../shared/assets/logo_light.svg?react';

import './Layout_shared.css';

export function Header() {
  return (
    <header className='Layout__Header'>
      <Link to='/'>
        <LogoIcon />
      </Link>

      <div>
        <button type='button'>☼</button>
        <button type='button'>РУ</button>
      </div>
    </header>
  );
}

import { Link } from 'react-router';

import { LogoLightIcon } from '../../shared/assets';

import './Layout_shared.css';

export function Header() {
  return (
    <header className='Layout__Header'>
      <Link to='/'>
        <LogoLightIcon />
      </Link>

      <div>
        <button type='button'>☼</button>
        <button type='button'>РУ</button>
      </div>
    </header>
  );
}

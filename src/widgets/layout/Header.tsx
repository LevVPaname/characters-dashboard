import { Link } from 'react-router';

import './Layout_shared.css';

import { LogoLightIcon } from '@/shared/assets';

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

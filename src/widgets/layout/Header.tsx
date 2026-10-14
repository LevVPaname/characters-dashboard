import { Link } from 'react-router';

import styles from './Header.module.scss';

import { LogoLightIcon } from '@/assets';

export function Header() {
  return (
    <header className={styles.Header}>
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

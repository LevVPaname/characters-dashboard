import { Outlet } from 'react-router';

import { Footer } from './Footer';
import { Header } from './Header';

import styles from './Layout.module.scss';

export function Layout() {
  return (
    <div className={styles.Layout}>
      <Header />

      <main className={styles.Content}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

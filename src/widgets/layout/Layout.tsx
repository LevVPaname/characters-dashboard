import { Outlet } from 'react-router';

import { Footer } from './Footer';
import { Header } from './Header';

import './Layout_shared.css';

export function Layout() {
  return (
    <div className='Layout'>
      <Header />

      <main className='Layout__Content'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

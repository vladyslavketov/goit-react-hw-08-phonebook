import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense fallback={<div style={{ padding: '0 20px' }}>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default AppBar;

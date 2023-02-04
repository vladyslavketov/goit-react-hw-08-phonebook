import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from 'components/App/App.styled'; 
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Header } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Container>
        <Header>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
      </Container>
      <Suspense fallback={<div style={{ padding: '0 20px' }}>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

AppBar.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default AppBar;

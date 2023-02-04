import { useAuth } from "hooks/useAuth";

import { StyledNavLink, NavList } from 'components/App/App.styled';

import PropTypes from 'prop-types';

export const Navigation = () => {
const { isLoggedIn } = useAuth();
  return (
    <>
      <nav>
        <NavList>
          <li>
            {isLoggedIn ? (
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            ) : (
              <StyledNavLink to="/">Home</StyledNavLink>
            )}
          </li>
        </NavList>
      </nav>
    </>
  );

};        

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool,
};
import { StyledNavLink, NavList } from 'components/App/App.styled';

export const AuthNav = () => {
  return (
    <NavList>
      <li>
        <StyledNavLink to="/register">Sign Up</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/login">Log In</StyledNavLink>
      </li>
    </NavList>
  );
};
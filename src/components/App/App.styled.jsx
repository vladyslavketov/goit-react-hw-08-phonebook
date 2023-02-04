import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 20px 0;
`;

export const Container = styled.div`
  padding: 0 16px;
  margin: auto;
  // display: flex;
  // flex-direction: column;
  // align-items: center;

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;

  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px;

  font-size: 20px;
  color: black;
  text-decoration: none;

  &.active {
    color: rgba(0, 0, 0, 0.4);
    font-weight: 600;

    border-radius: 8px;
    background-color: skyblue;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  font-size: 20px;
`;
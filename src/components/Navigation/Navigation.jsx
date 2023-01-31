import { NavLink } from "react-router-dom";

import css from '../Navigation/Navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul className={css.navList}>
          <li className={css.navItem}>
            {true ? (
              <NavLink to="/">Home</NavLink>
            ) : (
              <NavLink to="/contacts">Contacts</NavLink>
            )}
          </li>
          <li className={css.navItem}>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="/login">LogIn</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};        
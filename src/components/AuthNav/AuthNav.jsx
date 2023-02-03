import { NavLink } from "react-router-dom";
import css from '../AuthNav/AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.navList}>
      <li className={css.navItem}>
        <NavLink to="/register">Sign Up</NavLink>
      </li>
      <li className={css.navItem}>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </ul>
  );
};

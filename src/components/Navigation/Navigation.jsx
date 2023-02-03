import { NavLink } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

import css from '../Navigation/Navigation.module.css';

export const Navigation = () => {
const { isLoggedIn } = useAuth();

  return (
    <>
      <nav>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          {isLoggedIn && (
            <li className={css.navItem}>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );

};        


// {
//   true ? (
//     <NavLink to="/">Home</NavLink>
//   ) : (
//     <NavLink to="/contacts">Contacts</NavLink>
//   );
// }
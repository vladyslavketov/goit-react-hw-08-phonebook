import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { useAuth } from 'hooks/useAuth';
import css from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

 const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <p className={css.username}> Welcome, {user.name}</p>
      {/* <p className={css.username}> Welcome, </p> */}
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
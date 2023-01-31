import { useAuth } from 'hooks/useAuth';
import css from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}> Welcome, {user.name}</p>
      <button type='button'>Logout</button>
    </div>
  );
};
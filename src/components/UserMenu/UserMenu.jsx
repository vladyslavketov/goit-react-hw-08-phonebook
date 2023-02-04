import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { useAuth } from 'hooks/useAuth';

import { Wrapper } from 'components/App/App.styled';
import { Button } from 'components/Button/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

 const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <p> Welcome, {user.name} !</p>
      <Button type={'button'} title={'Logout'} onClick={handleLogOut} />
    </Wrapper>
  );
};
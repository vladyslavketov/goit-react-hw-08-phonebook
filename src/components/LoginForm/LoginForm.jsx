import { StyledForm, StyledInput, StyledLabel } from 'components/App/App.styled';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation'; 

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput type="password" name="password" />
      </StyledLabel>
      <Button type={"submit"} title={"Log In"} />
    </StyledForm>
  );
};

import { Container, Section } from "components/App/App.styled";
import { LoginForm } from "components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <Section>
      <Container>
        <LoginForm />
      </Container>
    </Section>
  );
};

export default LoginPage;;
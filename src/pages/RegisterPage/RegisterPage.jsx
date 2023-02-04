import { Container, Section } from "components/App/App.styled";
import { RegisterForm } from "components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <Section>
      <Container>
        <RegisterForm />
      </Container>
    </Section>
  );
};

export default RegisterPage;

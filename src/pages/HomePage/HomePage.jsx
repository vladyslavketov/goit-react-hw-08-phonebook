import { Box2, Container, Section } from "components/App/App.styled";
import { AuthNav } from "components/AuthNav/AuthNav";

const HomePage = () => {
  return (
    <Section>
      <Container>
        <Box2>
          <h1>Welcome to the Simple PhoneBook!</h1>
          <p>
            This app designed to help your brain not remember numbers, but write
            them down. To take advantage of all the features
          </p>
          <AuthNav />
        </Box2>
      </Container>
    </Section>
  );
};

export default HomePage;
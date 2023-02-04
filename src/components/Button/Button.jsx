import styled from 'styled-components';

export const Button = ({ title, onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 8px;

  color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  font-weight: 600;

  border: 0;
  border-radius: 8px;
  background-color: rgba(135, 207, 235, 0.5);
  cursor: pointer;
`;
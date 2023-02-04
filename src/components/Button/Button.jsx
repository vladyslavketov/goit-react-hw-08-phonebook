import styled from 'styled-components';

export const Button = ({type, title, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 8px 16px;

  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;

  border: 0;
  border-radius: 8px;
  background-color: rgba(135, 207, 235, 0.5);
  cursor: pointer;
  scale: 1;
  transition: background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: scale 1000ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    outline: none;
    background-color: rgba(135, 207, 235, 0.7);
    scale: 1.1;
  }
`;
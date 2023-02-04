import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 0 0 8px;

  background-color: rgba(135, 207, 235, 0.2);
  border-radius: 8px;

  & span:nth-child(2) {
    margin-left: auto;
  }
`;
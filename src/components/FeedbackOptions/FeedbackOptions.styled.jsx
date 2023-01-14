import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 24px;
  padding: 10px;
  border-radius: 12px;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  &:hover, &:focus {
    background-color: #008CBA;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

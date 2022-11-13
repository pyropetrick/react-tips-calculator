import styled from "styled-components";

export const MyButton = styled.button`
  background-color: #2ed2c9;
  color: white;
  border: none;
  padding: 13px 10px;
  font-weight: 400;
  font-size: 24px;
  &:hover:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

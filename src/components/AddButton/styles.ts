import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 4px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  background-color: #fff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #636363;
  font-size: 14px;
  border: 1px solid #ccc;
  transition: 100ms ease-in-out;
  user-select: none;

  &:hover {
    border: 1px solid transparent;
    box-shadow: 0 0 0 0.2rem #0d6efd;
  }

  &:active {
    box-shadow: 0 0 0 0.125rem #0d6efd;
  }

  & > svg {
    margin-right: 6px;
  }
`;

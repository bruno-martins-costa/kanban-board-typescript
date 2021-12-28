import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0 0 0;
`;

export const ColumnName = styled.span`
  margin: 0;
  font-size: 16px;
  color: #000;
  user-select: none;
  font-weight: 500;
`;

export const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 6px;
  color: #000;
  min-width: 24px;
  height: 24px;
  user-select: none;
  font-weight: 500;
`;

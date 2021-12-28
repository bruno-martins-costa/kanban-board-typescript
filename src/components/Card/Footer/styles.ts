import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 0 0 0;
  margin-top: 6px;
`;

export const DateInfo = styled.div`
  font-size: 13px;
`;

export const StoryInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Notes = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`;

export const DoneAndTotal = styled.div`
  display: flex;
  align-items: center;
  background-color: '#fff';
  font-size: 13px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3px 6px;
  border-radius: 6px;
  cursor: pointer;
  letter-spacing: 2px;

  & > svg {
    margin-right: 6px;
    margin-bottom: 2px;
  }

  &:hover {
    box-shadow: 0 0 0 0.1rem #0d6efd;
  }
`;

import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

interface Props {
  isDone: boolean;
}

interface InputProps {
  onChange: React.FormEventHandler<HTMLTextAreaElement>;
}

export const Container = styled.div<Props>`
  display: flex;
  width: 100%;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
`;

export const Field = styled(TextareaAutosize)<InputProps>`
  min-height: 36px;
  width: 100%;
  margin: 4px 2px;
  padding: 0 4px;
  resize: none;
  border: none;
  outline: none;
  font-family: inherit;
  overflow: hidden;
  box-sizing: content-box;
  transition: box-shadow 100ms ease-in-out;
  font-size: 13px;

  &:hover {
    box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.1);
  }

  &:focus {
    box-shadow: 0 0 0 0.1rem #000;
  }
`;

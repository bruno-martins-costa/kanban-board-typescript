import styled from 'styled-components';
import { motion } from 'framer-motion';

interface CheckboxProps {
  isDone: boolean;
}

export const Container = styled(motion.ul)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 4px;
  overflow: hidden;
`;

export const Task = styled.div`
  display: flex;
  padding-bottom: 8px;
  font-size: 14px;
  position: relative;
  overflow: visible;
  background-color: #fff;
  border-radius: 4px;
`;

export const CheckBox = styled.div<CheckboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isDone ? '#0d6efd' : '#fff')};
  border: 1px solid #0d6efd;
  width: 16px;
  min-width: 16px;
  height: 15px;
  margin-right: 6px;
  border-radius: 3px;
  margin-top: 8px;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isDone ? '#0d6efd' : '#0d6efd23')};
  }
`;

export const TextareaContainer = styled.div`
  width: 100%;
  padding-right: 14px;

  &:hover {
    & > .removeTask {
      display: flex;
    }
  }
`;

export const RemoveTask = styled.div`
  position: absolute;
  top: 10px;
  right: 24px;
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  display: none;
  cursor: pointer;
  background-color: #f44336;

  & > svg {
    color: #fff;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const DragArea = styled.div`
  width: fit-content;
  margin: 0;
  padding: 4px 0;
  position: absolute;
  top: 6px;
  right: -2px;
  display: flex;
`;

export const NoneTasks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 10px;
  text-align: center;
  font-size: 14px;
`;

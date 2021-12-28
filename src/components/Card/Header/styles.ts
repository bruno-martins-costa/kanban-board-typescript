import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps {
  onClick: React.MouseEventHandler;
  isMenuOpen: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Description = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  padding-right: 12px;
`;

export const Options = styled.div`
  position: absolute;
  transition: visibility 100ms ease-in-out;
  right: 0;
`;

export const OptionsButton = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  min-width: 32px;
  height: 32px;
  background-color: ${(props) => (props.isMenuOpen ? '#eee' : '#fff')};
  border-radius: 50%;
  transition: background-color 100ms ease-in-out;
  position: relative;
  left: 7px;
  bottom: 3px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #eee;
  }
`;

export const Menu = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  width: 132px;
  background-color: #fff;
  position: absolute;
  top: 29px;
  right: -7px;
  border-radius: 4px;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const Option = styled.li`
  padding: 8px 16px;
  transition: background-color 25ms ease-in-out;
  font-weight: 500;
  font-size: 13px;
  color: ${(props) => (props.color ? props.color : '#000')};

  &:hover {
    background-color: ${(props) => (props.color ? props.color : '#0d6efd')};
    color: #fff;
    cursor: pointer;
  }
`;

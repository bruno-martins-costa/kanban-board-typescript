import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
`;

export const Backdrop = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.55);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalWindow = styled(motion.div)`
  width: 500px;
  min-height: 300px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  z-index: 3;
`;

export const ModalContent = styled(motion.div)``;

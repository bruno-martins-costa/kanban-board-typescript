import { Container, Backdrop, ModalWindow, ModalContent } from './styles';
import { AnimatePresence } from 'framer-motion';
import { framerOptions } from './framerOptions';

interface Props {
  children: JSX.Element;
  isModalOpen: boolean;
  handleCloseEditor: any;
}

export const Modal = ({
  children,
  isModalOpen,
  handleCloseEditor,
}: Props): JSX.Element => {
  const { backdropAnimation, modalWindowAnimation, modalContentAnimation } =
    framerOptions;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Container>
          <Backdrop {...backdropAnimation} onClick={handleCloseEditor} />

          <ModalWindow {...modalWindowAnimation}>
            <ModalContent {...modalContentAnimation}>{children}</ModalContent>
          </ModalWindow>
        </Container>
      )}
    </AnimatePresence>
  );
};

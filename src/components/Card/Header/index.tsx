import {
  Container,
  Description,
  Options,
  OptionsButton,
  Menu,
  Option,
} from './styles';

import { AnimatePresence } from 'framer-motion';
import { MdMoreHoriz } from 'react-icons/md';
import { framerOptions } from './framerOptions';

interface Props {
  description: string;
  setIsMenuOpen: any;
  isMenuOpen: boolean;
  handleAddTask: any;
  handleEditCard: any;
  handleDeleteCard: any;
}

export const Header = ({
  description,
  setIsMenuOpen,
  isMenuOpen,
  handleAddTask,
  handleEditCard,
  handleDeleteCard,
}: Props): JSX.Element => {
  return (
    <Container>
      <Description>{description}</Description>

      <Options className='options'>
        <OptionsButton onClick={setIsMenuOpen} isMenuOpen={isMenuOpen}>
          <MdMoreHoriz size={24} />
        </OptionsButton>

        <AnimatePresence>
          {isMenuOpen && (
            <Menu {...framerOptions}>
              <Option onClick={handleAddTask}>New Task</Option>
              <Option onClick={handleEditCard}>Edit Card</Option>
              <Option onClick={handleDeleteCard} color='#f44336'>
                Delete Card
              </Option>
            </Menu>
          )}
        </AnimatePresence>
      </Options>
    </Container>
  );
};

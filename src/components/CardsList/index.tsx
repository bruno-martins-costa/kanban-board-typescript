import { Droppable } from 'react-beautiful-dnd';
import { ListContainer } from './styles';

interface Props {
  children: JSX.Element;
  id: string;
}

export const CardsList = ({ id, children }: Props): JSX.Element => {
  return (
    <Droppable droppableId={id} type='cards'>
      {(provided) => (
        <ListContainer ref={provided.innerRef} {...provided.droppableProps}>
          {children}
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
};

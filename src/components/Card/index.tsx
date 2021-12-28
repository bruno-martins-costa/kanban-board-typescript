import { useState, useContext, useEffect, useRef, useCallback } from 'react';

import { BoardContext } from '../../contexts/BoardContext';
import { Draggable } from 'react-beautiful-dnd';

import { Container, CardContainer, TagsList } from './styles';
import { Header, TasksList, Footer, Tag } from '../';

import { AnimatePresence } from 'framer-motion';

import { reduceDoneTasks } from '../../utils/reduceDoneTasks';

interface Props {
  index: number;
  columnId: string;
  cardData: any;
  handleOpenModal: any;
}

export const Card = ({
  index,
  columnId,
  cardData,
  handleOpenModal,
}: Props): JSX.Element => {
  const { cardId, description, tags, tasks, createdAt, lastUpdate } = cardData;

  const [isTasksListOpen, setIsTasksListOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editingCardData, setEditingCardData] = useState(null);

  const boardContext = useContext(BoardContext);

  const cardRef = useRef<HTMLDivElement>(null!);

  const setCurrentEditingTask = (editingCardValues: any) => {
    setEditingCardData(editingCardValues);
  };

  const handleAddTask = () => {
    if (!isTasksListOpen) setIsTasksListOpen(true);
    boardContext?.addTaskToCard(columnId, cardId);
    setIsMenuOpen(false);
  };

  const handleEditCard = () => {
    setIsMenuOpen(false);
    handleOpenModal();
  };

  const handleClickOutside = useCallback(
    (event) => {
      const hasCurrent = cardRef.current;
      const isClickedInside = !!cardRef?.current?.contains(event.target);
      if (hasCurrent && isClickedInside && isMenuOpen)
        return setIsMenuOpen(false);
      if (hasCurrent && !isClickedInside) return setIsMenuOpen(false);
    },
    [isMenuOpen]
  );

  useEffect(() => {
    if (editingCardData) {
      const timer = setTimeout(() => {
        boardContext?.editCardTask(Object.assign({}, editingCardData));
        setEditingCardData(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [editingCardData, boardContext?.editCardTask, boardContext]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Draggable draggableId={cardId} key={cardId} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          provided={provided}
          snapshot={snapshot}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContainer snapshot={snapshot} ref={cardRef}>
            <Header
              description={description}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={() => setIsMenuOpen((prevState) => !prevState)}
              handleAddTask={() => handleAddTask()}
              handleEditCard={() => handleEditCard()}
              handleDeleteCard={() =>
                boardContext?.deleteCardFromColumn(columnId, cardId)
              }
            />

            <TagsList>
              {tags.map((tag: any) => (
                <Tag tag={tag} key={tag}>
                  {tag}
                </Tag>
              ))}
            </TagsList>

            <AnimatePresence>
              {isTasksListOpen && (
                <TasksList
                  tasks={tasks}
                  columnId={columnId}
                  cardId={cardId}
                  setCurrentEditingTask={setCurrentEditingTask}
                />
              )}
            </AnimatePresence>

            <Footer
              lastUpdate={lastUpdate}
              createdAt={createdAt}
              openTasksList={() =>
                setIsTasksListOpen((prevState) => !prevState)
              }
              totalDoneTasks={reduceDoneTasks(tasks)}
              totalTasks={tasks.length}
            />
          </CardContainer>
        </Container>
      )}
    </Draggable>
  );
};

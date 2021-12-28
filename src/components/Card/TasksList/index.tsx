import React, { useContext } from 'react';

import { BoardContext } from '../../../contexts/BoardContext';

import {
  Container,
  Task,
  CheckBox,
  RemoveTask,
  NoneTasks,
  TextareaContainer,
  DragArea,
} from './styles';
import { Textarea } from '../../';

import { HiCheck } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { GrDrag } from 'react-icons/gr';
import { framerOptions } from './framerOptions';
import { Droppable, Draggable } from 'react-beautiful-dnd';

interface Props {
  tasks: any[];
  columnId: string;
  cardId: string;
  setCurrentEditingTask: any;
}

export const TasksList = ({
  tasks,
  columnId,
  cardId,
  setCurrentEditingTask,
}: Props): JSX.Element => {
  const boardContext = useContext(BoardContext);

  return (
    <Container {...framerOptions}>
      <Droppable droppableId={`${columnId}-${cardId}`} type='tasks'>
        {(providedDroppable) => (
          <div ref={providedDroppable.innerRef}>
            {!!tasks.length ? (
              tasks.map(({ taskId, isDone, task }, index) => (
                <Draggable draggableId={taskId} index={index} key={taskId}>
                  {(providedDraggable) => (
                    <div
                      ref={providedDraggable.innerRef}
                      {...providedDraggable.draggableProps}
                    >
                      <Task key={taskId}>
                        <CheckBox
                          isDone={isDone}
                          onClick={() =>
                            boardContext?.toggleTaskIsDone(columnId, cardId, taskId)
                          }
                        >
                          {isDone && <HiCheck color='#fff' />}
                        </CheckBox>

                        <TextareaContainer>
                          <Textarea
                            autofocus={index === 0 && !task}
                            value={task}
                            isDone={!!isDone}
                            handleChange={(
                              ev: React.FormEvent<HTMLTextAreaElement>
                            ) =>
                              setCurrentEditingTask({
                                columnId,
                                cardId,
                                taskId,
                                taskText: ev.currentTarget.value,
                              })
                            }
                          />

                          <RemoveTask
                            className='removeTask'
                            onClick={() =>
                              boardContext?.deleteCardTask({ columnId, cardId, taskId })
                            }
                          >
                            <IoClose size={10} />
                          </RemoveTask>
                        </TextareaContainer>

                        <DragArea
                          {...providedDraggable.dragHandleProps}
                          className='dragArea'
                        >
                          <GrDrag />
                        </DragArea>
                      </Task>
                    </div>
                  )}
                </Draggable>
              ))
            ) : (
              <NoneTasks>
                {`This story has no tasks yet.
            You can create one and start working :)`}
              </NoneTasks>
            )}
            {providedDroppable.placeholder}
          </div>
        )}
      </Droppable>
    </Container>
  );
};

import { createContext, useReducer, useEffect } from 'react';
import { BoardReducer } from './BoardReducer';
import useLocalStorage from '../hooks/useLocalStorage';
import { columnsMock } from '../mock';
import { handleSourceIdColumn } from '../utils/handleSourceIdColumn';

export interface BoardContextInterface {
  children?: JSX.Element;
  localStorageColumns?: any[];
  columns?: any;
  handleDragEnd?: any;
  createCardOnColumn?: any;
  updateCardFromColumn?: any;
  deleteCardFromColumn?: any;
  toggleTaskIsDone?: any;
  addTaskToCard?: any;
  editCardTask?: any;
  deleteCardTask?: any;
}

export const BoardContext = createContext<BoardContextInterface | null>(null);

const mock: any = columnsMock;

export const BoardProvider = ({
  children,
}: BoardContextInterface): JSX.Element => {
  const [localStorageColumns, setLocalStorageColumns] = useLocalStorage(
    'columns',
    mock
  );
  const [columns, dispatch] = useReducer(BoardReducer, localStorageColumns);

  const handleDragEnd = (result: any) => {
    const { type, source, destination } = result;
    if (!destination) return;
    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;

    const moveCard = () => {
      const sourceIdColumnData = handleSourceIdColumn(sourceId, columns);
      const [movedItem] = sourceIdColumnData.items.splice(source.index, 1);
      const isMovedToSameColumn = sourceId === destinationId;

      if (isMovedToSameColumn) {
        return dispatch({
          type: 'MOVE_CARD_TO_SAME_COLUMN',
          payload: { source, destination, movedItem },
        });
      }

      if (!isMovedToSameColumn) {
        return dispatch({
          type: 'MOVE_CARD_TO_ANOTHER_COLUMN',
          payload: { source, destination, movedItem },
        });
      }
    };

    const moveTask = () => {
      const columnsArray = ['backlog', 'todo', 'doing', 'done'];
      const [columnId] = columnsArray.filter((column) =>
        sourceId.includes(column)
      );
      const cardId = sourceId.replace(`${columnId}-`, '');
      return dispatch({
        type: 'MOVE_CARD_TASK',
        payload: { columnId, source, destination, cardId },
      });
    };

    const dragActionTypes = (action: string) => {
      const actions = {
        cards: moveCard,
        tasks: moveTask,
      };
      if (action === 'cards') return actions.cards();
      if (action === 'tasks') return actions.tasks();
    };

    dragActionTypes(type);
  };

  const createCardOnColumn = (columnId: string, cardData: any) => {
    dispatch({ type: 'CREATE_CARD', payload: { columnId, cardData } });
  };

  const updateCardFromColumn = (columnId: string, cardData: any) => {
    dispatch({ type: 'UPDATE_CARD', payload: { columnId, cardData } });
  };

  const deleteCardFromColumn = (columnId: string, cardId: string) => {
    dispatch({ type: 'DELETE_CARD', payload: { columnId, cardId } });
  };

  const toggleTaskIsDone = (
    columnId: string,
    cardId: string,
    taskId: string
  ) => {
    dispatch({
      type: 'TOGGLE_TASK_IS_DONE',
      payload: { columnId, cardId, taskId },
    });
  };

  const addTaskToCard = (columnId: string, cardId: string) => {
    dispatch({ type: 'ADD_TASK_TO_CARD', payload: { columnId, cardId } });
  };

  const editCardTask = ({ columnId, cardId, taskId, taskText }: any) => {
    dispatch({
      type: 'EDIT_CARD_TASK',
      payload: { columnId, cardId, taskId, taskText },
    });
  };

  const deleteCardTask = ({ columnId, cardId, taskId }: any) => {
    dispatch({
      type: 'DELETE_CARD_TASK',
      payload: { columnId, cardId, taskId },
    });
  };

  useEffect(() => {
    setLocalStorageColumns(columns);
  }, [columns, setLocalStorageColumns]);

  const context: BoardContextInterface = {
    columns,
    handleDragEnd,
    createCardOnColumn,
    updateCardFromColumn,
    deleteCardFromColumn,
    toggleTaskIsDone,
    addTaskToCard,
    editCardTask,
    deleteCardTask,
  };

  return (
    <BoardContext.Provider value={context}>{children}</BoardContext.Provider>
  );
};

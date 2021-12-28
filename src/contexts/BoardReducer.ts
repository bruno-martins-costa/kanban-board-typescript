import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createTaskSchema } from '../schemas/taskSchema';

type State = {
  localStorageColumns?: any[];
  columns?: any;
  [key: string]: any;
};

type Action = {
  type: string;
  payload: string | any;
};

type ReducerTypes = {
  [key: string]: any;
};

export const BoardReducer: React.Reducer<State, Action> = (state, action) => {
  const { type, payload } = action;

  const setCardToAnotherColumn = () => {
    const destination = state[payload.destination.droppableId];
    const destinationItems = destination.items;
    destinationItems.splice(payload.destination.index, 0, payload.movedItem);

    return {
      ...state,
      [payload.source.droppableId]: {
        ...state[payload.source.droppableId],
        items: state[payload.source.droppableId].items,
      },
      [payload.destination.droppableId]: {
        ...state[payload.destination.droppableId],
        items: destinationItems,
      },
    };
  };

  const setCardToSameColumn = () => {
    const sourceItems = state[payload.source.droppableId].items;
    sourceItems.splice(payload.destination.index, 0, payload.movedItem);

    return {
      ...state,
      [payload.source.droppableId]: {
        ...state[payload.source.droppableId],
        items: sourceItems,
      },
    };
  };

  const setCreateCard = () => {
    const newCard = {
      cardId: uuidv4(),
      description: payload.cardData.description,
      tags: payload.cardData.tags,
      tasks: payload.cardData.tasks,
      createdAt: new Date().toISOString(),
      lastUpdate: new Date().toISOString(),
    };

    return {
      ...state,
      [payload.columnId]: {
        ...state[payload.columnId],
        items: [newCard, ...state[payload.columnId].items],
      },
    };
  };

  const setUpdateCard = () => {
    const updatedCard = {
      cardId: payload.cardData.cardId,
      description: payload.cardData.description,
      tags: payload.cardData.tags,
      tasks: payload.cardData.tasks,
      createdAt: payload.cardData.createdAt,
      lastUpdate: new Date().toISOString(),
    };

    return {
      ...state,
      [payload.columnId]: {
        ...state[payload.columnId],
        items: state[payload.columnId].items.map((item: any) =>
          item.cardId === payload.cardData.cardId ? updatedCard : item
        ),
      },
    };
  };

  const setDeleteCard = () => {
    return {
      ...state,
      [payload.columnId]: {
        ...state[payload.columnId],
        items: state[payload.columnId].items.filter(
          (item: any) => item.cardId !== payload.cardId
        ),
      },
    };
  };

  const setToggleTaskIsDone = () => {
    return {
      ...state,
      [payload.columnId]: {
        ...state[payload.columnId],
        items: state[payload.columnId].items.map((item: any) =>
          item.cardId === payload.cardId
            ? {
                ...item,
                lastUpdate: new Date().toISOString(),
                tasks: item.tasks.map((task: any) =>
                  task.taskId === payload.taskId
                    ? { ...task, isDone: !task.isDone }
                    : task
                ),
              }
            : item
        ),
      },
    };
  };

  const setAddTaskToCard = () => {
    return {
      ...state,
      [payload.columnId]: {
        ...state[payload.columnId],
        items: state[payload.columnId].items.map((item: any) =>
          item.cardId === payload.cardId
            ? {
                ...item,
                lastUpdate: new Date().toISOString(),
                tasks: [createTaskSchema(uuidv4()), ...item.tasks],
              }
            : item
        ),
      },
    };
  };

  const setEditCardTask = () => {
    return {
      ...state,
      [payload.columnId]: {
        ...state[payload.columnId],
        items: state[payload.columnId].items.map((item: any) =>
          item.cardId === payload.cardId
            ? {
                ...item,
                lastUpdate: new Date().toISOString(),
                tasks: item.tasks.map((task: any) =>
                  task.taskId === payload.taskId
                    ? { ...task, task: payload.taskText }
                    : task
                ),
              }
            : item
        ),
      },
    };
  };

  const setDeleteCardTask = () => {
    return {
      ...state,
      [payload.columnId]: {
        ...state[payload.columnId],
        items: state[payload.columnId].items.map((item: any) =>
          item.cardId === payload.cardId
            ? {
                ...item,
                tasks: item.tasks.filter(
                  (task: any) => task.taskId !== payload.taskId
                ),
              }
            : item
        ),
      },
    };
  };

  const setMoveCardTask = () => {
    const [card] = state[payload.columnId].items.filter(
      (item: any) => item.cardId === payload.cardId
    );
    const cardTasks = card.tasks;
    const [movedTask] = cardTasks.splice(payload.source.index, 1);
    cardTasks.splice(payload.destination.index, 0, movedTask);

    return {
      ...state,
      [payload.columnId]: {
        ...state[payload.columnId],
      },
    };
  };

  // const returnSetterReducer = () => {
  //   if (type === 'MOVE_CARD_TO_ANOTHER_COLUMN') return setCardToAnotherColumn();
  //   if (type === 'MOVE_CARD_TO_SAME_COLUMN') return setCardToSameColumn();
  //   if (type === 'CREATE_CARD') return setCreateCard();
  //   if (type === 'UPDATE_CARD') return setUpdateCard();
  //   if (type === 'DELETE_CARD') return setDeleteCard();
  //   if (type === 'TOGGLE_TASK_IS_DONE') return setToggleTaskIsDone();
  //   if (type === 'ADD_TASK_TO_CARD') return setAddTaskToCard();
  //   if (type === 'EDIT_CARD_TASK') return setEditCardTask();
  //   if (type === 'DELETE_CARD_TASK') return setDeleteCardTask();
  //   if (type === 'MOVE_CARD_TASK') return setMoveCardTask();
  //   return undefined;
  // };

  // return returnSetterReducer() || state;

  const setStateReducerTypes: ReducerTypes = {
    MOVE_CARD_TO_ANOTHER_COLUMN: setCardToAnotherColumn,
    MOVE_CARD_TO_SAME_COLUMN: setCardToSameColumn,
    CREATE_CARD: setCreateCard,
    UPDATE_CARD: setUpdateCard,
    DELETE_CARD: setDeleteCard,
    TOGGLE_TASK_IS_DONE: setToggleTaskIsDone,
    ADD_TASK_TO_CARD: setAddTaskToCard,
    EDIT_CARD_TASK: setEditCardTask,
    DELETE_CARD_TASK: setDeleteCardTask,
    MOVE_CARD_TASK: setMoveCardTask,
  };

  return setStateReducerTypes[type]() || state;
};

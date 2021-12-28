import { cardSchema } from '../schemas/cardSchema';

type State = {
  localStorageColumns?: any[];
  columns?: any;
  [key: string]: any;
};

type Action = {
  type: string;
  payload?: string | any;
};

type ReducerTypes = {
  [key: string]: any;
};

export const EditorReducer: React.Reducer<State, Action> = (state, action) => {
  const { type, payload } = action;

  const setOpenEditor = () => {
    return {
      ...state,
      isEditorOpen: true,
      currentEditing: {
        ...state.currentEditing,
        ...payload,
      },
    };
  };

  const setCloseEditor = () => {
    return {
      isEditorOpen: false,
      currentEditing: cardSchema,
    };
  };

  const setEditCardData = () => {
    return {
      ...state,
      currentEditing: {
        ...state.currentEditing,
        [payload.key]: payload.value,
      },
    };
  };

  const setStateReducerTypes: ReducerTypes = {
    OPEN_EDITOR: setOpenEditor,
    CLOSE_EDITOR: setCloseEditor,
    EDIT_CARD_DATA: setEditCardData,
  };

  return setStateReducerTypes[type]() || state;
};

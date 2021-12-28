import { createContext, useReducer, useCallback } from 'react';
import { EditorReducer } from './EditorReducer';
import { cardSchema } from '../schemas/cardSchema';

export interface EditorContextInterface {
  children?: JSX.Element;
  editor?: any;
  handleOpenEditor?: any;
  handleCloseEditor?: any;
  handleEditCardData?: any;
}

export const EditorContext = createContext<EditorContextInterface | null>(null);

export const EditorProvider = ({
  children,
}: EditorContextInterface): JSX.Element => {
  const editorInitialState = {
    isEditorOpen: false,
    currentEditing: cardSchema,
  };
  const [editor, dispatch] = useReducer(EditorReducer, editorInitialState);

  const handleOpenEditor = useCallback((cardData) => {
    dispatch({ type: 'OPEN_EDITOR', payload: cardData });
  }, []);

  const handleCloseEditor = useCallback(() => {
    dispatch({ type: 'CLOSE_EDITOR' });
  }, []);

  const handleEditCardData = ({ key, value }: any) => {
    dispatch({ type: 'EDIT_CARD_DATA', payload: { key, value } });
  };

  return (
    <EditorContext.Provider
      value={{
        editor,
        handleOpenEditor,
        handleCloseEditor,
        handleEditCardData,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

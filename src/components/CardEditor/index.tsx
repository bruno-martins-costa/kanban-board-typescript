import { useContext, useRef } from 'react';
import { BoardContext } from '../../contexts/BoardContext';

import {
  Container,
  Description,
  Label,
  TaskTextarea,
  ButtonsContainer,
  Button,
} from './styles';
import { Modal } from '../';
import { EditorContext } from '../../contexts/EditorContext';
import { TagsSelector } from '../TagsSelector';

export const CardEditor = (): JSX.Element => {
  const boardContext = useContext(BoardContext);
  const editorContext = useContext(EditorContext);

  const currentEditing = editorContext?.editor.currentEditing;

  const { columnName, columnId, cardId, description, tags } = currentEditing;

  const textareaRef = useRef(null);

  const executeOperationFunction = (type: any) => {
    const types = {
      create: () => boardContext?.createCardOnColumn(columnId, currentEditing),
      update: () =>
        boardContext?.updateCardFromColumn(columnId, currentEditing),
    };
    if (type === 'create') return types.create();
    if (type === 'update') return types.update();
  };

  const handleButtonAction = (type: any) => {
    executeOperationFunction(type);
    editorContext?.handleCloseEditor();
  };

  return (
    <Modal
      isModalOpen={editorContext?.editor.isEditorOpen}
      handleCloseEditor={editorContext?.handleCloseEditor}
    >
      <Container>
        <Description>
          {`${!cardId ? 'Creating card in' : 'Editing card in'} ${columnName}`}
        </Description>

        <Label>Description</Label>

        <TaskTextarea
          ref={textareaRef}
          placeholder='Type a description here'
          defaultValue={description}
          onChange={(ev) =>
            editorContext?.handleEditCardData({
              key: 'description',
              value: ev.target.value,
            })
          }
        />

        <Label>Tags</Label>

        <TagsSelector
          handleChange={(cardTags) =>
            editorContext?.handleEditCardData({ key: 'tags', value: cardTags })
          }
          selecteds={tags}
        />

        <ButtonsContainer>
          <Button
            onClick={() => editorContext?.handleCloseEditor()}
            horizontalPadding={16}
          >
            Cancel
          </Button>

          {!cardId && (
            <Button
              onClick={() => handleButtonAction('create')}
              horizontalPadding={32}
              disabled={!description.trim() || !tags.length}
              colors={{
                background: '#279EFF',
                font: '#FFF',
                shadow: 'rgb(13, 110, 253, 0.35)',
              }}
            >
              Create
            </Button>
          )}

          {!!cardId && (
            <Button
              onClick={() => handleButtonAction('update')}
              horizontalPadding={32}
              disabled={!description.trim() || !tags.length}
              colors={{
                background: '#039be5',
                font: '#FFF',
                shadow: 'rgb(13, 110, 253, 0.35)',
              }}
            >
              Edit
            </Button>
          )}
        </ButtonsContainer>
      </Container>
    </Modal>
  );
};

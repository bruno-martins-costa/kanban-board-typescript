import { useContext, useMemo } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import { BoardContext } from '../../contexts/BoardContext';
import { EditorContext } from '../../contexts/EditorContext';

import { Container } from './styles';
import {
  AddButton,
  Card,
  Column,
  CardsList,
  ColumnInfo,
  NoCardsPlaceholder,
} from '../';

export const Board = (): JSX.Element => {
  const boardContext = useContext(BoardContext);
  const editorContext = useContext(EditorContext);

  const ColumnsMemo = useMemo(() => {
    return Object.entries(boardContext?.columns).map(
      ([columnId, { name: columnName, items: cards }]: any) => (
        <Column key={columnId}>
          <>
            <ColumnInfo columnName={columnName} totalCards={cards.length} />

            <CardsList id={columnId}>
              <>
                <AddButton
                  handleOpenEditor={() =>
                    editorContext?.handleOpenEditor({ columnName, columnId })
                  }
                />

                {!!cards.length ? (
                  cards.map((cardData: any, index: number) => (
                    <Card
                      key={cardData.cardId}
                      index={index}
                      columnId={columnId}
                      cardData={cardData}
                      handleOpenModal={() =>
                        editorContext?.handleOpenEditor({
                          columnName,
                          columnId,
                          ...cardData,
                        })
                      }
                    />
                  ))
                ) : (
                  <NoCardsPlaceholder />
                )}
              </>
            </CardsList>
          </>
        </Column>
      )
    );
  }, [boardContext?.columns, editorContext]);

  return (
    <DragDropContext
      onDragEnd={(result) => boardContext?.handleDragEnd(result)}
    >
      <Container>{ColumnsMemo}</Container>
    </DragDropContext>
  );
};

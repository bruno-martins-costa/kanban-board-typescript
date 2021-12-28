import styled from 'styled-components';

interface DragProps {
  provided?: any;
  snapshot?: any;
}

export const Container = styled.div<DragProps>`
  display: flex;
  max-width: 275px;
  min-width: 275px;
  height: 100%;
  margin: 8px 0 0 0;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  &[data-rbd-drag-handle-context-id] {
    cursor: default;
  }

  .options {
    visibility: hidden;
  }

  &:hover {
    .options {
      visibility: visible;
    }
  }
`;

export const CardContainer = styled.div<DragProps>`
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  min-height: 50px;
  color: #000;
  background-color: #fff;
  user-select: none;
  box-shadow: ${(props) =>
    props.snapshot.isDragging
      ? 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'
      : 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;'};
  width: 100%;
  border-radius: 8px;
  transition: 100ms ease-in-out;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid transparent;
    box-shadow: 0 0 0 0.2rem #0d6efd;
  }
`;

export const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 12px 0;
`;

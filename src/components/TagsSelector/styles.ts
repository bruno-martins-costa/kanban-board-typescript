import styled from 'styled-components';

interface SelectorProps {
  background?: string;
  isSelected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
  padding-right: 24px;
`;

export const Selector = styled.div<SelectorProps>`
  width: fit-content;
  border-radius: 10px;
  background-color: ${(props) => (props.background ? props.background : '')};
  color: ${(props) => (props.color ? props.color : '')};
  box-shadow: ${(props) =>
    props.isSelected ? '0 0 0 0.25rem rgb(13, 110, 253, 0.35)' : ''};
  padding: 2px 12px;
  margin: 3px 11px 8px 0;
  font-size: 12px;
  cursor: pointer;
  transition: 100ms ease-in-out;
  user-select: none;
  font-weight: 500;
  border: 1px solid transparent;
  border-color: ${(props) =>
    props.isSelected ? 'rgb(13, 110, 253, 0.6)' : ''};

  &:hover {
    border-color: ${(props) =>
      props.isSelected ? 'rgb(13, 110, 253, 0.6)' : '#ccc'};
    box-shadow: 0 0 0 0.25rem rgb(13, 110, 253, 0.1);
  }

  &:focus {
    box-shadow: 0 0 0 0.25rem rgb(13, 110, 253, 0.35);
    border: 1px solid rgb(13, 110, 253, 0.6);
  }
`;

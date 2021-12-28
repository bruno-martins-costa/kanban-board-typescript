import styled from 'styled-components';

interface ColorProps {
  background: string;
  font: string;
  shadow: string;
}

interface ButtonProps {
  horizontalPadding: number;
  colors?: ColorProps;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export const Description = styled.span`
  display: block;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const Label = styled.span`
  display: block;
  text-transform: uppercase;
  font-size: 11px;
  margin-bottom: 6px;
  letter-spacing: 1px;
`;

export const TaskTextarea = styled.textarea`
  resize: none;
  margin-bottom: 16px;
  border: 1px solid #fff;
  transition: 100ms ease-in-out;
  outline: none;
  background-color: #f3f3f4;
  border-radius: 6px;
  padding: 10px;
  height: 100px;
  font-size: 14px;

  &:hover {
    border: 1px solid #ccc;
    box-shadow: 0 0 0 0.25rem rgb(13, 110, 253, 0.1);
    background-color: #fff;
  }

  &:focus {
    box-shadow: 0 0 0 0.25rem rgb(13, 110, 253, 0.35);
    border: 1px solid rgb(13, 110, 253, 0.6);
    background-color: #fff;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: ${(props) => props.colors?.background || '#EEE'};
  padding-left: ${(props) => props.horizontalPadding}px;
  padding-right: ${(props) => props.horizontalPadding}px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${(props) => props.colors?.font || '#000'};
  border: 0;
  font-size: 12px;
  border-radius: 4px;
  transition: 100ms ease-in-out;
  outline: none;
  margin-right: 8px;
  font-weight: 500;
  letter-spacing: 1px;
  filter: brightness(${(props) => (props.disabled ? '0.8' : '1')});
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    box-shadow: 0 0 0 0.25rem
      ${(props) => props.colors?.shadow || 'rgb(168, 168, 168, 0.35)'};

    &:active {
      box-shadow: 0 0 0 0 #fff;
    }
  }
`;

import { Container } from './styles';

interface Props {
  children: JSX.Element;
}

export const Column = ({ children }: Props): JSX.Element => {
  return <Container>{children}</Container>;
};

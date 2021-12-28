import { Container } from './styles';

interface TagProps {
  children: JSX.Element;
  tag: string;
}

export const Tag = ({ children, tag }: TagProps): JSX.Element => {
  return <Container tag={tag}>{children}</Container>;
};

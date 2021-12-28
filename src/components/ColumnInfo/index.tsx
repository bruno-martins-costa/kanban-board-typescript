import { Container, ColumnName, Counter } from './styles';

interface Props {
  columnName: string;
  totalCards: number;
}

export const ColumnInfo = ({ columnName, totalCards }: Props): JSX.Element => {
  return (
    <Container>
      <ColumnName>{columnName}</ColumnName>
      <Counter>{totalCards}</Counter>
    </Container>
  );
};

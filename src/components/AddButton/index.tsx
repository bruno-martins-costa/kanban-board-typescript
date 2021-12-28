import { Container, Button } from './styles';
import { GrAdd } from 'react-icons/gr';

interface Props {
  handleOpenEditor: any;
}

export const AddButton = ({ handleOpenEditor }: Props): JSX.Element => {
  return (
    <Container>
      <Button onClick={handleOpenEditor}>
        <GrAdd color='#636363' size={14} />
        Add Card
      </Button>
    </Container>
  );
};

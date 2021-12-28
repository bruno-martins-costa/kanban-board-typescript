import { Container, DateInfo, StoryInfo, DoneAndTotal } from './styles';

import { BsCheckBox } from 'react-icons/bs';
import { formatDate } from '../../../utils/formatDate';

interface Props {
  lastUpdate: string;
  createdAt: string;
  openTasksList: any;
  totalDoneTasks: number;
  totalTasks: number;
}

export const Footer = ({
  lastUpdate,
  createdAt,
  openTasksList,
  totalDoneTasks,
  totalTasks,
}: Props): JSX.Element => {
  return (
    <Container>
      <DateInfo>{formatDate(lastUpdate || createdAt)}</DateInfo>
      <StoryInfo>
        <DoneAndTotal onClick={openTasksList}>
          <BsCheckBox />
          {`${totalDoneTasks}/${totalTasks}`}
        </DoneAndTotal>
      </StoryInfo>
    </Container>
  );
};

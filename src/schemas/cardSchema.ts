import { TaskSchema } from './taskSchema';

export interface CardSchema {
  columnName: string;
  columnId: string;
  cardId: string;
  description: string;
  tags: string[];
  tasks: TaskSchema[];
  createdAt: string;
  lastUpdate: string;
}

export const cardSchema: CardSchema = {
  columnName: '',
  columnId: '',
  cardId: '',
  description: '',
  tags: [],
  tasks: [],
  createdAt: '',
  lastUpdate: '',
};

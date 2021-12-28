export interface TaskSchema {
  taskId: string;
  isDone: boolean;
  task: string;
}

export const taskSchema: TaskSchema = {
  taskId: '',
  isDone: false,
  task: '',
};

export const createTaskSchema = (id: string) => {
  return {
    ...taskSchema,
    taskId: id,
  };
};

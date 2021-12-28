import { TaskSchema } from "../schemas/taskSchema";

export const reduceDoneTasks = (tasksArray: TaskSchema[]) => {
  return tasksArray.reduce(
    (total, current) => (current.isDone ? total + 1 : total),
    0
  );
};

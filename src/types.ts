export type TodoType = {
  task: string;
  isDone: boolean;
  id: string;
};

export type TodoListProps = {
  todos: TodoType[];
};

export type TodoProps = {
  todo: TodoType;
};

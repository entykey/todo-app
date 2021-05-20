import { Todo } from "./Todo"
import { Card } from 'antd';
import { TodoType, TodoListProps } from "./types"


export const TodoList = (props: TodoListProps) => {

  const { todos } = props

  return (
    <>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
      >
        <div>
          {todos.map((todo: TodoType) => {
            return (
              <Todo key={todo.id} todo={todo} />
            )
          })}
        </div>
      </Card>
    </>
  )
}
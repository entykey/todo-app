import { Switch, Divider, Typography, Button } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';

import { TodoProps } from "./types"
import { db } from "./firebase"

const { Text } = Typography;

export const Todo = (props: TodoProps) => {

  const { todo } = props;

  const toggleTodo = async (id: string, value: boolean) => {
    await db.collection("todos").doc(id).update({
      isDone: !value
    })
  }

  const deleteTodo = async (id: string) => {
    await db.collection("todos").doc(id).delete()
  }

  return (
    <div>
      <span style={{ marginRight: 5 }}>
        <Switch
          checked={todo.isDone}
          onChange={(e) => toggleTodo(todo.id, todo.isDone)} />
      </span>
      <span style={{ marginRight: 15 }}>
        <Button
          type="text"
          shape="round"
          icon={<DeleteTwoTone
            twoToneColor="#d9d9d9" />}
          onClick={() => deleteTodo(todo.id)}
        >

        </Button>
      </span>

      <Text
        disabled={todo.isDone}
        delete={todo.isDone}
        strong
      >
        {todo.task}
      </Text>

      <Divider />
    </div>
  )
}


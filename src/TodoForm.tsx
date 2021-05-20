import 'antd/dist/antd.css';
import React, { useState } from "react"
import { Input } from 'antd';

type TodoFormProps = {
  onAddTodo: (text: string) => void
}

export const TodoForm = (props: TodoFormProps) => {

  const { onAddTodo } = props

  const [value, setValue] = useState("")

  const createTodo = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    onAddTodo(value)
    setValue("");
  };

  return (
    <form onSubmit={createTodo}>
      <p>
        <Input
          placeholder="Add a new todo"
          allowClear
          size="large"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

    </form>
  )

}



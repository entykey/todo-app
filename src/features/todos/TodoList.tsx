import { Todo } from "./Todo"
import { Card } from 'antd';
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setTodos, selectTodos } from "../todos/todosSlice"
import { db } from "../../app/firebase"
import { useEffect } from "react"

export const TodoList = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectTodos)

  useEffect(() => {
    const unsubscribe = db.collection("todos").orderBy("timestamp", "desc").onSnapshot((snap) => {
      dispatch(setTodos(snap.docs.map((doc) => {
        return {
          id: doc.id,
          task: doc.data().task,
          isDone: doc.data().isDone,
        }
      })))
    })
    return unsubscribe
  }, [dispatch])


  return (
    <>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
      >
        <div>
          {todos && todos.map((todo) => {
            return (
              <Todo key={todo.id} todo={todo} />
            )
          })}
        </div>
      </Card>
    </>
  )
}
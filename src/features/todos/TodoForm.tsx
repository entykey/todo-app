import 'antd/dist/antd.css';
import React, { useState } from "react"
import { Input } from 'antd';
import { db } from "../../app/firebase"
import { firebase } from "../../app/firebase"

export const TodoForm = () => {

  const [title, setTitle] = useState("")

  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setTitle("");

    await db.collection("todos").add({
      task: title,
      isDone: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <Input
          placeholder="Add a new todo"
          allowClear
          size="large"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>

    </form>
  )

}



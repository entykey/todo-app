import { useState, useEffect } from "react"
import { TodoType } from "./types"
import 'antd/dist/antd.css';
import "./styles.css"
import { Layout, Card } from 'antd';
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"
import { db } from "./firebase"
import firebase from "firebase"

const { Footer, Content } = Layout;

function App() {

  useEffect(() => {
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot((snap) => {
      setTodo(snap.docs.map((doc) => {
        return {
          id: doc.id,
          task: doc.data().task,
          isDone: doc.data().isDone,
          timestamp: doc.data().timestamp
        }
      }))
    })
  }, [])


  const [todos, setTodo] = useState<TodoType[]>([])

  const todoAddHandler = async (text: string) => {
    await db.collection("todos").add({
      task: text,
      isDone: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

  }



  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        <div className="main-container">
          <h1 style={{ marginTop: "50px" }}>Todo ✅</h1>
          <Card title="Todos">
            <TodoForm onAddTodo={todoAddHandler} />
            <TodoList todos={todos} />
          </Card>
        </div>
      </Content>
      <Footer>2021</Footer>
    </Layout>
  );
}

export default App;

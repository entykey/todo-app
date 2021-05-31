import 'antd/dist/antd.css';
import "./styles.css"
import { Layout, Card } from 'antd';
import { TodoForm } from "./features/todos/TodoForm"
import { TodoList } from "./features/todos/TodoList"

const { Footer, Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        <div className="main-container">
          <h1 style={{ fontSize: "2em", marginTop: "50px" }}>Todo App ✅</h1>
          <Card title="Todos">
            <TodoForm />
            <TodoList />
          </Card>
        </div>
      </Content>
      <Footer>2021</Footer>
    </Layout>
  );
}

export default App;

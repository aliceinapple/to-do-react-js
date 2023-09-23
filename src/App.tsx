import './App.css';
import { useState, useEffect, createContext } from 'react';
import { getTodos } from './actions/get-todos';
import ToDoInput from './components/to-do-input/to-do-input.component';
import ToDoItemList from './components/to-do-item-list/to-do-item-list.component';
import { Space } from 'antd';

export const TodosContext = createContext({
  handleGetTodos: async () => { },
});

function App() {
  const [todos, setTodos] = useState([]);

  const handleGetTodos = async () => {
    const items = await getTodos();
    setTodos(items);
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  return (
    <TodosContext.Provider value={{ handleGetTodos }}>
      <Space direction="vertical">
        <Space
          style={{
            backgroundColor: 'rgb(255,255,255, 0.5)',
            padding: '20px',
            borderRadius: '6px',
          }}
        >
          <ToDoInput />
        </Space>
        <Space
          style={{
            backgroundColor: 'rgb(255,255,255, 0.5)',
            padding: '20px',
            borderRadius: '6px',
          }}
        >
          <ToDoItemList todos={todos} />
        </Space>
      </Space>
    </TodosContext.Provider>
  );
}

export default App;

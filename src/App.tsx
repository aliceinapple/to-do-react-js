import { useState, useEffect, createContext } from 'react';
import { getTodos } from './actions/get-todos';
import ToDoInput from './components/to-do-input/to-do-input.component';
import ToDoItemList from './components/to-do-item-list/to-do-item-list.component';
import { CheckOutlined } from '@ant-design/icons';
import Box from './ui/box/box';
import Title from 'antd/es/typography/Title';
import { textStyles } from './ui/styles/text';
import { texts } from './resources/texts';
import { Divider } from 'antd';

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
      <Box flexDirection='column' className='fade-in-from-top'>
        <Title style={textStyles}>{texts.app_title}<CheckOutlined /></Title>
        <ToDoInput />
        <Divider />
        <ToDoItemList todos={todos} />
      </Box>
    </TodosContext.Provider>
  );
}

export default App;

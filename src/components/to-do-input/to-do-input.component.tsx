import { useState } from 'react';
import { Space } from 'antd';
import { createTodo } from '../../actions/create-todo';
import TodoMainInput from '../../ui/input/inputs/todo-main-input';
import CreateTodoButton from '../../ui/button/buttons/create-todo-button';

const ToDoInput: React.FC = () => {
  const [value, setValue] = useState('');

  const handleCreateTodo = async () => {
    if (value) {
      await createTodo(value);
      setValue('');
    }
  };

  return (
    <Space
      style={{
        backgroundColor: 'rgb(255,255,255, 0.3)',
        padding: '10px',
        borderRadius: '6px',
      }}
    >
      <Space>
        <TodoMainInput value={value} setValue={setValue} handleCreateTodo={handleCreateTodo} />
        <CreateTodoButton handleCreateTodo={handleCreateTodo} />
      </Space>

    </Space>
  );
};

export default ToDoInput;

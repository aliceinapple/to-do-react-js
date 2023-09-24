import { useState } from 'react';
import { createTodo } from '../../actions/create-todo';
import TodoMainInput from '../../ui/input/inputs/todo-main-input';
import CreateTodoButton from '../../ui/button/buttons/create-todo-button';
import Box from '../../ui/box/box';
import { blockStyles } from '../../ui/styles/block';

const ToDoInput: React.FC = () => {
  const [value, setValue] = useState('');

  const handleCreateTodo = async () => {
    if (value) {
      await createTodo(value);
      setValue('');
    }
  };

  return (
    <Box style={blockStyles} gap={10}>
      <TodoMainInput
        value={value}
        setValue={setValue}
        handleCreateTodo={handleCreateTodo}
      />
      <Box>
        <CreateTodoButton handleCreateTodo={handleCreateTodo} />
      </Box>
    </Box>
  );
};

export default ToDoInput;

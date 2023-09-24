import { useState } from 'react';
import ToggleTodoButton from '../../ui/button/buttons/toggle-todo-button';
import EditTodoButton from '../../ui/button/buttons/edit-todo-button';
import DeleteTodoButton from '../../ui/button/buttons/delete-todo-button';
import TodoItemInput from '../../ui/input/inputs/todo-item-input';
import { editTodo } from '../../actions/edit-todo';
import { itemComplitedStyles, itemEditStyles, itemStyles } from '../../ui/styles/item';
import Box from '../../ui/box/box';

interface ToDoItemProps {
  text: string;
  id: string;
  completed: boolean;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ text, id, completed }) => {
  const [value, setValue] = useState(text);
  const [readOnly, setReadOnly] = useState(true);

  const handleEdit = async () => {
    await editTodo(id, value);
    setReadOnly(true);
  };

  const getColor = () => {
    if (completed) {
      return itemComplitedStyles;
    } else if (!readOnly) {
      return itemEditStyles;
    } else {
      return itemStyles;
    }
  };

  return (
    <Box style={getColor()} gap={10} className='fade-in-from-top'>
      <TodoItemInput
        readOnly={readOnly}
        completed={completed}
        value={value}
        setValue={setValue}
        handleEdit={handleEdit}
      />
      <Box gap={5}>
        <ToggleTodoButton id={id} completed={completed} />
        <EditTodoButton
          readOnly={readOnly}
          setReadOnly={setReadOnly}
          handleEdit={handleEdit}
          completed={completed}
        />
        <DeleteTodoButton id={id} />
      </Box>
    </Box>
  );
};

export default ToDoItem;

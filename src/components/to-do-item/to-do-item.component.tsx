import { useState } from 'react';
import { Space } from 'antd';
import ToggleTodoButton from '../../ui/button/buttons/toggle-todo-button';
import EditTodoButton from '../../ui/button/buttons/edit-todo-button';
import DeleteTodoButton from '../../ui/button/buttons/delete-todo-button';
import TodoItemInput from '../../ui/input/inputs/todo-item-input';
import { editTodo } from '../../actions/edit-todo';

interface ToDoItemProps {
  text: string;
  id: string;
  completed: boolean;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
  text,
  id,
  completed,
}) => {
  const [value, setValue] = useState(text);
  const [readOnly, setReadOnly] = useState(true);

  const handleEdit = async () => {
    await editTodo(id, value);
    setReadOnly(true);
  };

  const getColor = () => {
    if (completed) {
      return 'rgb(255,255,255, 0.3)'
    } else if (!readOnly) {
      return 'linear-gradient(210deg, #79d8f4, #72a9ef, #d486f0, #ee9fd1)'
    } else {
      return 'rgb(255,255,255, 0.9)'
    }
  }

  return (
    <Space
      style={{
        background: getColor(),
        padding: '10px',
        borderRadius: '6px',
      }}
    >
      <Space>
        <TodoItemInput readOnly={readOnly} value={value} setValue={setValue} handleEdit={handleEdit} />
      </Space>
      <Space>
        <ToggleTodoButton id={id} completed={completed} />
        <EditTodoButton readOnly={readOnly} setReadOnly={setReadOnly} handleEdit={handleEdit} completed={completed} />
        <DeleteTodoButton id={id} />
      </Space>
    </Space>
  );
};

export default ToDoItem;

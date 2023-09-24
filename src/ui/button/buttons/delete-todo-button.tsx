import { DeleteOutlined } from '@ant-design/icons';
import { deleteTodo } from '../../../actions/delete-todo';
import TodoButton from '../todo-button';

interface DeleteTodoButtonProps {
  id: string;
}

const DeleteTodoButton: React.FC<DeleteTodoButtonProps> = ({ id }) => {
  const handleDelete = async () => {
    await deleteTodo(id);
  };

  return (
    <TodoButton
      danger={true}
      type="primary"
      icon={<DeleteOutlined />}
      onClick={handleDelete}
    />
  );
};

export default DeleteTodoButton;

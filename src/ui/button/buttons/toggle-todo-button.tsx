import { CheckOutlined, RollbackOutlined } from '@ant-design/icons';
import { toggleTodo } from '../../../actions/toggle-todo';
import TodoButton from '../todo-button';

interface ToggleTodoButtonProps {
  id: string;
  completed: boolean;
}

const ToggleTodoButton: React.FC<ToggleTodoButtonProps> = ({
  id,
  completed,
}) => {
  const handleToggle = async () => {
    await toggleTodo(id, completed);
  };

  return completed ? (
    <TodoButton
      type="primary"
      icon={<RollbackOutlined />}
      onClick={handleToggle}
    />
  ) : (
    <TodoButton
      type="primary"
      icon={<CheckOutlined />}
      onClick={handleToggle}
    />
  );
};

export default ToggleTodoButton;

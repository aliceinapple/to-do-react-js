import { texts } from '../../../resources/texts';
import TodoInput from '../todo-input';

interface TodoMainInputProps {
  value: string;
  setValue: (value: string) => void;
  handleCreateTodo: () => Promise<void>;
}

const TodoMainInput: React.FC<TodoMainInputProps> = ({
  value,
  setValue,
  handleCreateTodo,
}) => {
  return (
    <TodoInput
      placeholder={texts.add_todo}
      value={value}
      setValue={setValue}
      onPressEnter={handleCreateTodo}
    />
  );
};

export default TodoMainInput;

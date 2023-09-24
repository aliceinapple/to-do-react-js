import TodoInput from '../todo-input';

interface TodoItemInputProps {
  readOnly: boolean;
  completed: boolean;
  value: string;
  setValue: (value: string) => void;
  handleEdit: () => Promise<void>;
}

const TodoItemInput: React.FC<TodoItemInputProps> = ({
  readOnly,
  completed,
  value,
  setValue,
  handleEdit,
}) => {
  return (
    <TodoInput
      bordered={!readOnly}
      readOnly={readOnly}
      value={value}
      setValue={setValue}
      onPressEnter={handleEdit}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    />
  );
};

export default TodoItemInput;

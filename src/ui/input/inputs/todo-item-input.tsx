import TodoInput from "../todo-input"

interface TodoItemInputProps {
    readOnly: boolean,
    value: string,
    setValue: (value: string) => void,
    handleEdit: () => Promise<void>
}

const TodoItemInput: React.FC<TodoItemInputProps> = ({ readOnly, value, setValue, handleEdit }) => {
    return (
        <TodoInput bordered={!readOnly} readOnly={readOnly} value={value} setValue={setValue} onPressEnter={handleEdit} />
    )
}

export default TodoItemInput
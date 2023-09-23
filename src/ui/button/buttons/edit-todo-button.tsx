import { CheckSquareOutlined, FormOutlined } from "@ant-design/icons";
import TodoButton from "../todo-button";


interface EditTodoButtonProps {
    readOnly: boolean,
    setReadOnly: (value: boolean) => void,
    handleEdit: () => Promise<void>
    completed: boolean
}

const EditTodoButton: React.FC<EditTodoButtonProps> = ({ readOnly, setReadOnly, handleEdit, completed }) => {

    const setReadOnlyFalse = async () => {
        setReadOnly(false)
    }

    return (
        readOnly ? (
            <TodoButton disabled={completed} type="primary" icon={< FormOutlined />} onClick={setReadOnlyFalse} />
        ) : (
            <TodoButton type="primary" icon={<CheckSquareOutlined />} onClick={handleEdit} />
        )
    )
}

export default EditTodoButton
import { PlusOutlined } from "@ant-design/icons";
import TodoButton from "../todo-button";


interface CreateTodoButtonProps {
    handleCreateTodo: () => Promise<void>
}

const CreateTodoButton: React.FC<CreateTodoButtonProps> = ({ handleCreateTodo }) => {
    return (
        <TodoButton type="primary" icon={<PlusOutlined />} onClick={handleCreateTodo} />
    )
}

export default CreateTodoButton
import { useEffect } from "react"
import ToDoItem from "../to-do-item/to-do-item.component"

interface ToDoItemListProps {
    todos: { _id: string, text: string, completed: boolean }[]
    handleGetTodos: () => Promise<void>
}

const ToDoItemList: React.FC<ToDoItemListProps> = ({ todos, handleGetTodos }) => {

    useEffect(() => {
     }, [todos])

    return (
        <div>
            {todos.map((item, index) =>
                <div key={index}><ToDoItem text={item.text} id={item._id} completed={item.completed} handleGetTodos={handleGetTodos} /></div>
            )}
        </div>
    )
}

export default ToDoItemList
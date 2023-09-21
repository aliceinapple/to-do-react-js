import { useEffect } from "react"
import ToDoItem from "../to-do-item/to-do-item.component"

interface ToDoItemListProps {
    todos: { id: string, text: string, completed: boolean }[]
}

const ToDoItemList: React.FC<ToDoItemListProps> = ({ todos }) => {

    useEffect(() => { }, [todos])

    return (
        <div>
            {todos.map((item, index) =>
                <div key={index}><ToDoItem text={item.text} /></div>
            )}
        </div>
    )
}

export default ToDoItemList
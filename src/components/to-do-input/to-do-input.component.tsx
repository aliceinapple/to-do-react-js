import { useState } from "react"
import { Button, Input } from 'antd';
import { createTodo } from "../../actions/create";

interface ToDoInputProps {
    handleAddToDo: () => Promise<void>
}

const ToDoInput: React.FC<ToDoInputProps> = ({ handleAddToDo }) => {
    const [value, setValue] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleCreateTodo = () => {
        createTodo(value)
        setValue('')
        handleAddToDo()
    }

    return (
        <div>
            <Input placeholder="Basic usage" value={value} onChange={handleInputChange} />
            <Button onClick={handleCreateTodo} />
        </div>
    )
}

export default ToDoInput
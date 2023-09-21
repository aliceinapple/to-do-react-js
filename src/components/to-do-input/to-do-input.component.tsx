import { useState } from "react"
import { Form, Button, Input } from 'antd';
import { createTodo } from "../../actions/createTodo";

interface ToDoInputProps {
    handleGetTodos: () => Promise<void>
}

const ToDoInput: React.FC<ToDoInputProps> = ({ handleGetTodos }) => {
    const [value, setValue] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleCreateTodo = () => {
        createTodo(value)
        setValue('')
        handleGetTodos()
    }

    return (
        <div>
            <Form onFinish={handleCreateTodo}>
                <Form.Item>
                    <Input placeholder="Basic usage" value={value} onChange={handleInputChange} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" />
                </Form.Item>
            </Form>
        </div>
    )
}

export default ToDoInput
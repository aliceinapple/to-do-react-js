import { useState } from 'react'
import { Button, Form, Input } from 'antd';
import { CheckOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons"
import styles from './to-do-item.module.css'
import { deleteTodo } from '../../actions/deleteTodo';
import { toggleTodo } from '../../actions/toggleTodo';
import { editTodo } from '../../actions/editTodo';

interface ToDoItemProps {
    text: string,
    id: string,
    completed: boolean,
    handleGetTodos: () => Promise<void>
}

const ToDoItem: React.FC<ToDoItemProps> = ({ text, id, completed, handleGetTodos }) => {
    const [value, setValue] = useState(text)
    const [isDisabled, setIsDisabled] = useState(true)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleDelete = async () => {
        deleteTodo(id)
        await handleGetTodos()
    }

    const handleToggle = async () => {
        toggleTodo(id, completed)
        await handleGetTodos()
    }

    const handleEdit = async () => {
        editTodo(id, value)
        setIsDisabled(true)
        await handleGetTodos()
    }

    return (
        <div className={completed ? styles.to_do_item_container_completed : styles.to_do_item_container}>
            <Form onFinish={handleEdit}>
                <div className={styles.to_do_item}>
                    <Form.Item>
                        <Input disabled={isDisabled} value={value} onChange={handleInputChange} />
                    </Form.Item>
                </div>
                <div className={styles.to_do_icons}>
                    <Button type="primary" icon={<CheckOutlined />} onClick={handleToggle} />
                    {
                        isDisabled ? <Button type="primary" icon={<EditOutlined />} onClick={() => setIsDisabled(false)} /> :
                            <Form.Item>
                                <Button htmlType="submit" type="primary" icon={<PlusOutlined />} />
                            </Form.Item>
                    }
                    <Button danger type="primary" icon={<DeleteOutlined />} onClick={handleDelete} />
                </div>
            </Form>

        </div>
    )
}

export default ToDoItem
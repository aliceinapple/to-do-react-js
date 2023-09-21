import { Button, Input } from 'antd';
import { CheckOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import styles from './to-do-item.module.css'

interface ToDoItemProps {
    text: string
}

const { TextArea } = Input;

const ToDoItem: React.FC<ToDoItemProps> = ({ text }) => {
    return (
        <div className={styles.to_do_item_container}>
            <div className={styles.to_do_item}>
                <TextArea value={text} />
            </div>
            <div className={styles.to_do_icons}>
                <Button type="primary" icon={<CheckOutlined />} />
                <Button type="primary" icon={<EditOutlined />} />
                <Button danger type="primary" icon={<DeleteOutlined />} />
            </div>
        </div>
    )
}

export default ToDoItem
import { Input } from "antd"
import React, { useContext } from "react";
import { TodosContext } from "../../App";

interface TodoInputProps {
    placeholder?: string,
    bordered?: boolean,
    readOnly?: boolean,
    value: string,
    style?: React.CSSProperties,
    setValue: (value: string) => void,
    onPressEnter: () => Promise<void>
}

const TodoInput: React.FC<TodoInputProps> = ({ placeholder, bordered, readOnly, value, style, setValue, onPressEnter }) => {
    const { handleGetTodos } = useContext(TodosContext);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handlePressEnter = async () => {
        await onPressEnter()
        await handleGetTodos();
    }

    return (
        <Input
            placeholder={placeholder}
            bordered={bordered}
            readOnly={readOnly}
            value={value}
            onChange={handleInputChange}
            onPressEnter={handlePressEnter}
            style={style}
        />
    )
}

export default TodoInput
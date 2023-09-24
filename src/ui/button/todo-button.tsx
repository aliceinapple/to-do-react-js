import { Button } from 'antd';
import React, { useContext } from 'react';
import { TodosContext } from '../../App';

interface TodoButtonProps {
  danger?: boolean;
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  type?: 'default' | 'link' | 'text' | 'primary' | 'dashed' | undefined;
  icon: React.ReactNode;
  onClick: () => Promise<void>;
}

const TodoButton: React.FC<TodoButtonProps> = ({
  danger,
  disabled,
  htmlType = 'button',
  type = 'default',
  icon,
  onClick,
}) => {
  const { handleGetTodos } = useContext(TodosContext);

  const handleClick = async () => {
    await onClick();
    await handleGetTodos();
  };

  return (
    <Button
      danger={danger}
      disabled={disabled}
      htmlType={htmlType}
      type={type}
      icon={icon}
      onClick={handleClick}
    />
  );
};

export default TodoButton;

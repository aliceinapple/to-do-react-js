import ToDoItem from '../to-do-item/to-do-item.component';
import { Space } from 'antd';

interface ToDoItemListProps {
  todos: { _id: string; text: string; completed: boolean }[];
}

const ToDoItemList: React.FC<ToDoItemListProps> = ({
  todos,
}) => {
  const done = todos.filter((item) => item.completed);
  const todo = todos.filter((item) => !item.completed);

  return (
    <Space direction="vertical">
      <Space direction="vertical">
        {todo.map((item) => (
          <div key={item._id}>
            <ToDoItem
              text={item.text}
              id={item._id}
              completed={item.completed}
            />
          </div>
        ))}
      </Space>
      <Space direction="vertical">
        {done.map((item) => (
          <div key={item._id}>
            <ToDoItem
              text={item.text}
              id={item._id}
              completed={item.completed}
            />
          </div>
        ))}
      </Space>
    </Space>
  );
};

export default ToDoItemList;

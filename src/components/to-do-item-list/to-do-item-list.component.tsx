import Title from 'antd/es/typography/Title';
import Box from '../../ui/box/box';
import ToDoItem from '../to-do-item/to-do-item.component';
import { blockStyles } from '../../ui/styles/block';
import { textStyles } from '../../ui/styles/text';
import { texts } from '../../resources/texts';

interface ToDoItemListProps {
  todos: { _id: string; text: string; completed: boolean }[];
}

const ToDoItemList: React.FC<ToDoItemListProps> = ({ todos }) => {
  const done = todos.filter((item) => item.completed);
  const todo = todos.filter((item) => !item.completed);

  return (
    <Box justifyContent='center'>
      {todos.length ?
        <Box flexDirection='column' gap={10} style={blockStyles}>
          {todo.map((item) => (
            <div key={item._id}>
              <ToDoItem
                text={item.text}
                id={item._id}
                completed={item.completed}
              />
            </div>
          ))}
          {done.map((item) => (
            <div key={item._id}>
              <ToDoItem
                text={item.text}
                id={item._id}
                completed={item.completed}
              />
            </div>
          ))}
        </Box> : <Box className='fade-in-from-top'><Title style={textStyles} level={3}>{texts.add_task_message}</Title></Box>}
    </Box>
  );
};

export default ToDoItemList;

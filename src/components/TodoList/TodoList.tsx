import React from 'react';
import { Todo } from '../../interface/Todo';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

interface IProps {
  todoList: Todo[];
  DeleteItemHandler: (item: Todo) => void;
  EditItemHandler: (item: Todo) => void;
  EditItemText: (item: Todo, e: any) => void;
}

const TodoList: React.FC<IProps> = ({
  todoList,
  DeleteItemHandler,
  EditItemHandler,
  EditItemText,
}) => {
  return (
    <ul className={styles.list}>
      {todoList.map((text: Todo) => (
        <TodoItem
          key={text.key}
          todoItem={text}
          EditItemText={EditItemText}
          EditItemHandler={EditItemHandler}
          DeleteItemHandler={DeleteItemHandler}
        />
      ))}
    </ul>
  );
};

export default TodoList;

import React, { useState } from 'react';
import { Todo } from '../../interface/Todo';
import styles from './TodoItem.module.css';

interface IProps {
  todoItem: Todo;
  DeleteItemHandler: (item: Todo) => void;
  EditItemHandler: (item: Todo) => void;
  EditItemText: (item: Todo, e: any) => void;
}

const TodoItem: React.FC<IProps> = ({
  todoItem,
  DeleteItemHandler,
  EditItemHandler,
  EditItemText,
}) => {
  const [text, setText] = useState<string>('');
  return (
    <div className={styles.todo} onClick={() => console.log(todoItem)}>
      {todoItem.edit ? (
        <input type='text' onChange={(e: any) => setText(e.target.value)} />
      ) : (
        <li>{todoItem.text}</li>
      )}
      <div>
        <button
          onClick={() => {
            if (todoItem.edit) {
              EditItemText(todoItem, text);
            }
            EditItemHandler(todoItem);
          }}>
          {todoItem.edit ? '확인' : '수정'}
        </button>
        <button onClick={() => DeleteItemHandler(todoItem)}> 삭제 </button>
      </div>
    </div>
  );
};

export default TodoItem;

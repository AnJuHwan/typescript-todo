import { useState } from 'react';
import styles from './App.module.css';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './interface/Todo';

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [text, setText] = useState<string>('');

  // 리스트 텍스트 입력
  const TextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 리스트 추가
  const SubmitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodoList([...todoList, { key: Date.now().toString(), text: text, edit: false }]);
    setText('');
  };

  // 삭제기능
  const DeleteItemHandler = (item: Todo) => {
    const deleteTodoList = todoList.filter((todo) => todo.key !== item.key);
    setTodoList(deleteTodoList);
  };

  const EditItemHandler = (item: Todo) => {
    const findItem = todoList.findIndex((todo) => todo.key === item.key);
    setTodoList(
      todoList.map((todo) =>
        todo.key === item.key ? { ...todo, edit: !todoList[findItem].edit } : todo,
      ),
    );
  };

  const EditItemText = (item: Todo, text: string) => {
    console.log(text);
    const findItem = todoList.findIndex((todo) => todo.key === item.key);
    setTodoList(
      todoList.map((todo) =>
        todo.key === item.key ? { ...todo, text: (todoList[findItem].text = text) } : todo,
      ),
    );
  };

  return (
    <div className={styles.body}>
      <Form text={text} TextHandler={TextHandler} SubmitHandler={SubmitHandler} />
      <TodoList
        EditItemHandler={EditItemHandler}
        todoList={todoList}
        DeleteItemHandler={DeleteItemHandler}
        EditItemText={EditItemText}
      />
    </div>
  );
}

export default App;

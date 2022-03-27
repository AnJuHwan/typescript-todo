import React, { useState } from 'react';
import styles from './Form.module.css';

interface IProps {
  text: string;
  TextHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  SubmitHandler: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const Form: React.FC<IProps> = ({ text, TextHandler, SubmitHandler }) => {
  return (
    <form className={styles.form}>
      <input type='text' onChange={TextHandler} value={text} />
      <button onClick={SubmitHandler}>완료</button>
    </form>
  );
};

export default Form;

import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {

  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const entered = todoTextInputRef.current!.value;

    if (entered.trim().length === 0) {
      /// throw An Erro

      return;
    }

    todosCtx.addTodo(entered);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Text</button>
    </form>
  );
};

export default NewTodo;

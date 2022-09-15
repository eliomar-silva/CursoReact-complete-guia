import React, { useState,useRef } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErroModal from "../UI/ErroModal";
import Wrapper from "../Helpers/Wrappers";

const AddUser = (props) => {  
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredAge < 18) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

  };



  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErroModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form autoComplete="on" onSubmit={AddUserHandler}>
          <label htmlFor="user">Usename: </label>
          <input
            id="user"
            type="text"
            autoComplete="name"
            ref={nameInputRef}
      
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type={"number"}          
            placeholder="Your age"
            ref={ageInputRef}
          
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

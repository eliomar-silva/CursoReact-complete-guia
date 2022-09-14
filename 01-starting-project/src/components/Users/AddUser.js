import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErroModal from "../UI/ErroModal";

const AddUser = (props) => {
  const [enteredUse, setEnteredUse] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUse.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age(non-empty values).'
      });
      return;
    }
    if (+enteredAge < 18) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      });
      return;
    }
    props.onAddUser(enteredUse, enteredAge);
    setEnteredUse("");
    setEnteredAge("");
  };

  const userChangerHandler = (event) => {
    setEnteredUse(event.target.value);
  };
  const ageChangerHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErroModal title={error.title} message={error.message} onConfirm={errorHandler} />
      )}
      <Card className={classes.input}>
        <form autoComplete="on" onSubmit={AddUserHandler}>
          <label htmlFor="user">Usename: </label>
          <input
            id="user"
            type="text"
            value={enteredUse}
            autoComplete="name"
            onChange={userChangerHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type={"number"}
            value={enteredAge}
            placeholder="Your age"
            onChange={ageChangerHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

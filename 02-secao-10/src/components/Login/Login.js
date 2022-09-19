import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../Contexts/AuthContext";
import Input from '../UI/Input/Input'

const initialState = { value: "", isValid: null };
const passwordIniState = { value: "", isValid: null };

const actions = {
  userInput: "USER_INPUT",
  inputBlur: "INPUT_BLUR",
};

const emailReducer = (state, action) => {
  if (action.type === actions.userInput) {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === actions.inputBlur) {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === actions.userInput) {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === actions.inputBlur) {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: null };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatch] = useReducer(emailReducer, initialState);
  const [passwordState, passwordDespatch] = useReducer(
    passwordReducer,
    passwordIniState
  );

  const { onLogin } = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const emailInputRef =  useRef() 
  const passwordInputRef =  useRef() 

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CleanUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    emailDispatch({ type: actions.userInput, val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes("@") > 6 && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    passwordDespatch({ type: actions.userInput, val: event.target.value });

    // setFormIsValid(event.target.value.trim().length > 6 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: actions.inputBlur });
  };

  const validatePasswordHandler = () => {
    passwordDespatch({ type: actions.inputBlur });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid) {
      onLogin(emailState.value, passwordState.isValid);
    }else if(!emailIsValid) {
      emailInputRef.current.activate();
    } else {
      passwordInputRef.current.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id={"email"}
          type={"email"}
          label={'E-mail'}
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
        <Input
          ref={passwordInputRef}
          id={"password"}
          type={"password"}
          label={'Password'}
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

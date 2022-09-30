import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouch: false,
};

const actions = {
  input: "INPUT",
  touch: "TOUCH",
  reset: "RESET",
};

const inputStateReduce = (state, action) => {
  if (action.type === actions.input) {
    return { value: action.event, isTouch: state.isTouch };
  }
  if (action.type === actions.touch) {
    return { isTouch: true, value: state.value };
  }
  if (action.type === actions.reset) {
    return { value: "", isTouch: false };
  }
  return initialInputState;
};

const useInput = (validateValue, msgError) => {
  const [inputState, inputDispath] = useReducer(
    inputStateReduce,
    initialInputState
  );

  const valid = validateValue(inputState.value);
  const hasError = !valid && inputState.isTouch;

  const changeHandler = (event) => {
    inputDispath({ type: actions.input, event: event.target.value });
  };

  const blurHandler = (event) => {
    inputDispath({ type: actions.touch });
  };

  const reset = () => {
    inputDispath({ type: actions.reset });
  };

  let contentErro = hasError
    ? {
        class: "form-control invalid",
        msg: <p className="error-text">{msgError}</p>,
      }
    : { class: "form-control", msg: "" };

  return {
    value: inputState.value,
    valid,
    onChange: changeHandler,
    onBlur: blurHandler,
    contentErro,
    reset,
  };
};

export default useInput;

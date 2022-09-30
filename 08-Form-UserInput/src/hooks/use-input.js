import { useState } from "react";

const useInput = (validateValue, msgError) => {
  const [enteredValue, setEnderedValue] = useState("");
  const [enteredTouched, setEnteredTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && enteredTouched;

  const changeHandler = (event) => {
    setEnderedValue(event.target.value);
  };

  const blurHandler = (event) => {
    setEnteredTouched(true);
  };

  const reset = () => {
    setEnderedValue("");
    setEnteredTouched(false);
  };

  let contentValid = hasError
    ? { class: "form-control invalid", msg: <p className="error-text">{msgError}</p> }
    : { class: "form-control", msg: "" };    

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    changeHandler,
    blurHandler,
    contentValid,
    reset,
  };
};
export default useInput;

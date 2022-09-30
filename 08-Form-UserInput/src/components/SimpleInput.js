import useInput from "../hooks/use-input";

const nameValidation = (val) => {
  return val.trim() !== "";
};
const emailValidation = (val) => {
  return val.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
};

const nameMsgErro = "Name must not be empty.";
const emailMsgErro = "E-mail invalid.";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetNameInput,
    contentValid: nameContentsVal
  } = useInput(nameValidation, nameMsgErro) ;

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailValid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    contentValid: emailContentsVal,
    reset: resetEmailInput,
  } = useInput(emailValidation, emailMsgErro);
  

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !emailValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameContentsVal.class}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameContentsVal.msg}
      </div>
      <div className={emailContentsVal.class}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
       {emailContentsVal.msg}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

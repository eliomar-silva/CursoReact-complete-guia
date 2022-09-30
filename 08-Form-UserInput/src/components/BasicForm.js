import useInput from "../hooks/useInput";

const nameValid = (value) => value.trim().length !== 0;

const emailValidation = (val) => {
  return val.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
};
const BasicForm = (props) => {
  const {
    value: nameEnteredS,
    valid: validName,
    onChange: nameChangeHandler,
    onBlur: nameBlurHandler,
    contentErro: contentNameErro,
    reset: resetName,
  } = useInput(nameValid, "First Name must not be empty");
  const {
    value: lastNameEnteredS,
    valid: validLastName,
    onChange: nameLastChangeHandler,
    onBlur: nameLastBlurHandler,
    contentErro: contentNameLastErro,
    reset: resetNameLast,
  } = useInput(nameValid, "Last Name must not be empty");
  const {
    value: emailEnteredS,
    valid: validEmail,
    onChange: emailChangeHandler,
    onBlur: emailBlurHandler,
    contentErro: contentEmailErro,
    reset: resetEmail,
  } = useInput(emailValidation, "E-mail invalid.");

  let formIsValid = false;
  if(!validName && !validLastName && !validEmail) {
    formIsValid = true;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!validName) {
      nameBlurHandler();
      return;
    }

    if (!validLastName) {
      nameLastBlurHandler();
      return;
    }

    if (!validEmail) {
      emailBlurHandler();
      return;
    }

    console.log(nameEnteredS);
    console.log(lastNameEnteredS);
    console.log(emailEnteredS);

    resetName();
    resetNameLast();
    resetEmail();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="control-group">
        <div className={contentNameErro.class}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameEnteredS}
          />
          {contentNameErro.msg}
        </div>
        <div className={contentNameLastErro.class}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={nameLastChangeHandler}
            onBlur={nameLastBlurHandler}
            value={lastNameEnteredS}
          />
          {contentNameLastErro.msg}
        </div>
      </div>
      <div className={contentEmailErro.class}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailEnteredS}
        />
        {contentEmailErro.msg}
      </div>
      <div className="form-actions">
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

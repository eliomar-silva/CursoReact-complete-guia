import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changed, setChanged] = useState(false);

  const changeTextHandler = () => {
    setChanged(true);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {!changed && <Output>It's good to see you!</Output>}
      {changed && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
 
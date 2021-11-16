import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Welcome Parth</h2>
      {!changeText ? (
        <Output>It's Good to see you!</Output>
      ) : (
        <Output>Changed</Output>
      )}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;

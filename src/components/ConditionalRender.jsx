//* this component illustrates how to conditionally render different components based on the condition whether true or false
import { useState } from "react";

function Welcome() {
  return <p>You are welcome.</p>;
}

function Goodbye() {
  return <p>Goodbye see you then...</p>;
}

const ConditionalRender = () => {
  const [knocking, setKnocking] = useState(false);
  const handleClick = () => {
    setKnocking((prevKnocking) => !prevKnocking);
  };
  return (
    <div>
      {knocking ? <Welcome /> : <Goodbye />}{" "}
      <button onClick={handleClick}>click here</button>
    </div>
  );
};
export default ConditionalRender;

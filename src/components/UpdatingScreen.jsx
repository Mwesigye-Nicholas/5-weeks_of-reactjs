//* this component illustrates updating the ui using state.
import { useState } from "react";
function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return <button onClick={handleClick}>Clicked {count} times </button>;
}
function UpdatingScreen() {
  return (
    <div>
      <h3>Counters that update separately.</h3>
      <Button />
      <Button />
    </div>
  );
}
export default UpdatingScreen;

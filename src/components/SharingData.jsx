/* eslint-disable react/prop-types */
//* this component illustrates how to share data between components from the parent to child components

import { useState } from "react";

function SharingData() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h4>Counters that updates together</h4>
      <Button count={count} handleClick={handleClick} />
      <Button count={count} handleClick={handleClick} />
    </div>
  );
}
export default SharingData;
function Button({ count, handleClick }) {
  return <button onClick={handleClick}>Clicked {count} times </button>;
}

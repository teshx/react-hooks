/* STAPSS USE HOOKS */
//1 /Create a functional component:

//2 /import useState from react
import React, { useState } from "react";
function Statehooks() {
  //3/  Initialize state value by calling useState() at the top component  (use destructuring):
  const [count, setCount] = useState(0);
  const [age, setage] = useState(10);
  const [fruit, setFruit] = useState("Banana");
  const countUpdater = () => {
    //Update your state using the updater function
    setCount((x) => x + 1);
  };

  return (
    <div>
      <button onClick={countUpdater}>ClickToIncreament </button>
      <h3>Count displayer: {count}</h3>
      <h3>Count displayer: {age}</h3>
    </div>
  );
}
export default Statehooks;

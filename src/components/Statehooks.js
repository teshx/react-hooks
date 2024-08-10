/* STAPSS USE HOOKS */
//1 /Create a functional component:

//2 /import useState from react
import React, { useState } from "react";
function Statehooks() {
  //3/  Initialize state value by calling useState() at the top component  (use destructuring):
  const [count, setCount] = useState(0);
  const [age, setage] = useState(0);
  const [fruit, setFruit] = useState("Banana");
  console.log(count);
  const countUpdater = () => {
    //Update your state using the updater function
    setCount((count) => count + 1);

    if (count % 2 != 0) {
      setage((x) => x + 1);
    }
  };
  const reserUpdater = () => {
    setCount((x) => (x = 0));
    setage((x) => (x = 0));
  };
  return (
    <div>
      <button onClick={countUpdater}>ClickToIncreament </button>
      <button onClick={reserUpdater}>Reseat all </button>
      <h3>Count displayer: {count}</h3>
      <h3>Count displayer: {age}</h3>
    </div>
  );
}
export default Statehooks;

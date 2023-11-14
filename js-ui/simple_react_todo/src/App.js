import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  const incrementClick = () => {
    setCount(count + 1);
  };
  const decrementClick = () => {
    setCount(count - 1);
  };

  const resetClick = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click here to increment the count. {count}</p>
        <p>
        <div>
            <Button
              title="Increment"
              action={incrementClick}
              className={"pushable-incr"}
              classFront={"pushable-incr-front"}
            ></Button>
          </div>
        </p>
        <p>
        <div>
            <Button
              title="Decrement"
              action={decrementClick}
              className={"pushable-decr"}
              classFront={"pushable-decr-front"}
            ></Button>
          </div>
        </p>
        <p>
          <div>
            <Button
              title="Reset"
              action={resetClick}
              className={"pushable-reset"}
              classFront={"pushable-reset-front"}
            ></Button>
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;

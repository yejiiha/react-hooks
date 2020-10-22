import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles.css";
// import App from "./App";

const App = () => {
  const [num, setNum] = useState(1);
  const incrementNum = () => setNum(num + 1);
  const decrementNum = () => setNum(num - 1);
  return (
    <div className="App">
      <h1>Hello {num}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementNum}>+</button>
      <button onClick={decrementNum}>-</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

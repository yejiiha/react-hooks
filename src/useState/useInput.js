// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./styles.css";

export const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

// const App = () => {
//   const maxLen = (value) => value.length <= 10;
//   const minLen = (value) => !value.includes("@");
//   const name = useInput("I'm ", maxLen, minLen);
//   return (
//     <div className="App">
//       <h1>Hello </h1>
//       <input placeholder="Name" {...name} />
//       {/* value={name.value} onChange={name.onChange} === {...name}*/}
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

import React from "react";

const Hello = () => {
  // Using JSX (commented)
  // return (
  //   <div>
  //     <h1>Hello Sagar, How are you?</h1>
  //   </div>
  // );

  // Using React.createElement
  return React.createElement(
    "div",
    { id: "hello", className: "DummyClass" }, // Corrected className
    React.createElement("h1", null, "Hello Sagar, How are you?")
  );
};

export default Hello;

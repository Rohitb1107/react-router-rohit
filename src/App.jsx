import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, Rohit</h1>
      <p>How are you?</p>
      <p>I am Fine</p>
    </>
  );
}

export default App;

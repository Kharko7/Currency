import { useState } from "react";
import "./App.css";
import Header from "./containers/header/Header";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleClickCopy = () => {
    const result = inputValue
      .replace(/(\r\n|\n|\r)/g, " ")
      .replace(/(\d+:\d+)/g, "");

    navigator.clipboard.writeText(result);
    console.log(result);
  };
  return (
    <div className="app">
      <Header />
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleClickCopy}>Copy</button>
      </div>
    </div>
  );
}

export default App;

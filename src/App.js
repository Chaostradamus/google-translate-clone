import { useState } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";

const App = () => {
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Polish");
  const handleClick = () => {
    setInputLanguage(setOutputLanguage);
    setOutputLanguage(setInputLanguage);
  };

  return (
    <div className="app">
      <TextBox style={"input"} />
      <div className="arrow-container" onClick={handleClick}>
        <Arrows />
      </div>
      <TextBox style={"output"} />
    </div>
  );
};

export default App;

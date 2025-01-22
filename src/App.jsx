import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UC, LC, NC, SC } from "./data/passChar.jsx";

function App() {
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCas, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [passLen, setPassLen] = useState(10);
  const [finalPassword, setFinalPassword] = useState("");

  const checkBoxValue = (e) => {
    const checkValue = e.target.value;

    if (checkValue == "upperCase") {
      setUpperCase(!upperCase);
    } else if (checkValue == "lowerCase") {
      setLowerCase(!lowerCas);
    } else if (checkValue == "number") {
      setNumber(!number);
    } else {
      setSymbol(!symbol);
    }
  };

  const createPass = () => {
    let finalPass = "";
    let charSet = "";
    if (upperCase || lowerCas || number || symbol) {
      if (upperCase) charSet += UC;
      if (lowerCas) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;

      for (let i = 0; i < passLen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }

      setFinalPassword(finalPass);
    } else {
      alert("Please select minimum one box ...! ");
    }
  };

  const copyPass = () => {
    navigator.clipboard.writeText(finalPassword);
  };

  return (
    <>
      <div className="passBox">
        <h2>Create a Password</h2>
        <div className="pass-input">
          <input type="text" value={finalPassword} />
          <button onClick={copyPass}>copy</button>
        </div>
        <div className="pass-length">
          <label htmlFor="passwordLength">Password Length</label>
          <input
            type="number"
            max={20}
            value={passLen}
            onChange={(event) => setPassLen(event.target.value)}
          />
        </div>

        <div className="pass-length">
          <label htmlFor="passwordLength">Include Upeer Case Latter</label>
          <input
            type="checkbox"
            value="upperCase"
            checked={upperCase}
            onChange={checkBoxValue}
          />
        </div>

        <div className="pass-length">
          <label htmlFor="passwordLength">Include lower Case Latter</label>
          <input
            type="checkbox"
            value="lowerCase"
            checked={lowerCas}
            onChange={checkBoxValue}
          />
        </div>

        <div className="pass-length">
          <label htmlFor="passwordLength">Include Number</label>
          <input
            type="checkbox"
            value="number"
            checked={number}
            onChange={checkBoxValue}
          />
        </div>

        <div className="pass-length">
          <label htmlFor="passwordLength">Include Symbol</label>
          <input
            type="checkbox"
            value="symbol"
            checked={symbol}
            onChange={checkBoxValue}
          />
        </div>
        <button class="btn" onClick={createPass}>
          Generate password
        </button>
      </div>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { number } from "./constants/constants";

function App() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operator, setOperator] = useState();

  const inputCurrentNumber = (e) => {
    let input = e.target.value;
    if (currentNumber === 0) {
      setCurrentNumber(input);
    } else {
      setCurrentNumber(currentNumber + input);
    }
  };

  const clear = () => {
    setCurrentNumber(0);
  };

  const porcentagem = (e) => {
    setCurrentNumber(currentNumber / 100);
  };

  const changeSign = () => {
    if (currentNumber > 0) {
      setCurrentNumber(-currentNumber);
    } else {
      setCurrentNumber(Math.abs(currentNumber));
    }
  };

  const operatorHandler = (e) => {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setFirstNumber(currentNumber);
    setCurrentNumber(0);
  };

  const calculate = () => {
    if (operator === "/") {
      setCurrentNumber(parseFloat(firstNumber) / parseFloat(currentNumber));
    } else if (operator === "X") {
      setCurrentNumber(parseFloat(firstNumber) * parseFloat(currentNumber));
    } else if (operator === "-") {
      setCurrentNumber(parseFloat(firstNumber) - parseFloat(currentNumber));
    } else if (operator === "+") {
      setCurrentNumber(parseFloat(firstNumber) + parseFloat(currentNumber));
    }
  };

  console.log(number.slice(-3));
  console.log(number.slice(-6, -3));
  console.log(number.slice(-9, -6));

  return (
    <div className="calculator">
      <div className="wrapper">
        <h1 className="result">{currentNumber}</h1>
        <button onClick={clear}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={porcentagem}>%</button>
        <button className="orange" onClick={operatorHandler} value={"/"}>
          /
        </button>
        {number.slice(-3).map((item) => (
          <button className="grey" onClick={inputCurrentNumber} value={item.id}>
            {item.id}
          </button>
        ))}

        <button className="orange" onClick={operatorHandler} value={"X"}>
          X
        </button>
        {number.slice(-6, -3).map((item) => (
          <button className="grey" onClick={inputCurrentNumber} value={item.id}>
            {item.id}
          </button>
        ))}

        <button className="orange" onClick={operatorHandler} value={"-"}>
          -
        </button>
        {number.slice(-9, -6).map((item) => (
          <button className="grey" onClick={inputCurrentNumber} value={item.id}>
            {item.id}
          </button>
        ))}

        <button className="orange" onClick={operatorHandler} value={"+"}>
          +
        </button>
        <button className="grey" onClick={inputCurrentNumber} value={0}>
          0
        </button>
        <button style={{ visibility: "hidden" }}>k</button>
        <button className="grey" onClick={inputCurrentNumber} value={"."}>
          ,
        </button>
        <button className="orange" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;

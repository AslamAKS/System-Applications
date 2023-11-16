import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Calculator.css";
import { IoIosMenu } from "react-icons/io";
import { RxCross1, RxBox } from "react-icons/rx";
import { BsBackspace } from "react-icons/bs";
import { PiDivideLight } from "react-icons/pi";
import { GoDash, GoPlus } from "react-icons/go";
import { TbSquareRoot2 } from "react-icons/tb";
import { FcHome } from "react-icons/fc";
import { ContextApp } from "../../AppContext/AppContext";

function Calculator() {
  const { calculator, updateCalculator } = useContext(ContextApp);

  const deleteHandler = (value) => {
    if (value === "dl") {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        current: String(calculator.current).slice(0, -1),
      }));
    }
  };

  const allclearHandler = (value) => {
    if (value === "CE") {
      updateCalculator(() => ({
        current: "",
        operations: "",
        prevoius: "",
        equal: "",
        seconNum: "",
        math: "",
      }));
    }
  };

  const clearCurrent = (value) => {
    if (value === "C") {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        current: "",
      }));
    }
  };

  const calculatePercentage = () => {
    try {
      const result = (parseFloat(calculator.current) / 100).toString();

      if (!calculator.operations) {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          equal: "",
          operations: "",
          seconNum: "",
          prevoius: "0",
          current: "0",
        }));
      } else if (calculator.equal) {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          equal: "",
          operations: "",
          seconNum: "",
          prevoius: result,
          current: result,
        }));
      } else {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          current: result,
          seconNum: result,
        }));
      }
    } catch (error) {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        current: "ERROR",
      }));
    }
  };

  const calculateRoot = () => {
    try {
      if (calculator.prevoius && calculator.operations) {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          seconNum: calculator.math,
        }));
        if (calculator.equal) {
          updateCalculator((prevCalculator) => ({
            ...prevCalculator,
            equal: "",
            operations: "",
            seconNum: "",
            prevoius: "",
            math: "",
          }));
        }
      } else {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          equal: "",
          operations: "",
          seconNum: "",
          prevoius: "",
          math: "",
        }));
      }
      if (calculator.current < 0) {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          current: "Invalid Input",
        }));
      }
      let prv = calculator.current ? calculator.math : calculator.current;
      const result = Math.sqrt(parseFloat(calculator.current));
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        current: result,
      }));
      if (calculator.math === "") {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          math: "root(" + calculator.current + ")",
        }));
      } else {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          math: "root(" + prv + ")",
        }));
      }
    } catch (error) {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        current: "Invalid Input",
      }));
    }
  };

  const calculateReciprocal = () => {
    try {
      if (calculator.prevoius && calculator.operations) {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          seconNum: calculator.math,
        }));
        if (calculator.equal) {
          updateCalculator((prevCalculator) => ({
            ...prevCalculator,
            equal: "",
            operations: "",
            seconNum: "",
            prevoius: "",
            math: "",
          }));
        }
      } else {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          equal: "",
          operations: "",
          seconNum: "",
          prevoius: "",
          math: "",
        }));
      }

      let val = calculator.current ? calculator.math : calculator.current;
      const result = (1 / parseFloat(calculator.current)).toString();
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        current: result,
      }));
      if (calculator.math === "") {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          math: "1/(" + calculator.current + ")",
        }));
      } else {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          math: "1/(" + val + ")",
        }));
      }
    } catch (error) {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        current: "ERROR",
      }));
    }
  };

  const calculateSquare = () => {
    try {
      if (calculator.prevoius && calculator.operations) {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          seconNum: calculator.math,
        }));
        if (calculator.equal) {
          updateCalculator((prevCalculator) => ({
            ...prevCalculator,
            equal: "",
            operations: "",
            seconNum: "",
            prevoius: "",
            math: "",
          }));
        }
      } else {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          equal: "",
          operations: "",
          seconNum: "",
          prevoius: "",
          math: "",
        }));
      }
      let sqr = calculator.current ? calculator.math : calculator.current;
      const result =
        parseFloat(calculator.current) * parseFloat(calculator.current);
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        current: result,
      }));
      if (calculator.math === "") {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          math: "sqr(" + calculator.current + ")",
        }));
      } else {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          math: "sqr(" + sqr + ")",
        }));
      }
    } catch (error) {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        current: "ERROR",
      }));
    }
  };

  const signChange = () => {
    if (calculator.current === "") return;
    if (calculator.equal) {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        equal: "",
        operations: "",
        seconNum: "",
        prevoius: "",
        math: "negate(" + calculator.current + ")",
        current: -calculator.current,
      }));
    }
    if (calculator.math === "") {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        math: "negate(" + calculator.current + ")",
      }));
    } else {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        math: "negate(" + calculator.math + ")",
      }));
    }
    updateCalculator((prevCalculator) => ({
      ...prevCalculator,
      current: -calculator.current,
    }));
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(calculator.prevoius);
    let currentNumber = parseFloat(calculator.current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (calculator.operations.operator) {
      case "/":
        result =
          currentNumber === 0
            ? "Cannot divide by zero"
            : previousNumber / currentNumber;
        break;
      case "*":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  const appendValueHandler = (el) => {
    const value = el;
    console.log("here is the value", value);
    if (value === ".") {
      if (calculator.current.includes(".")) {
        return;
      } else {
        if (calculator.current === "") {
          updateCalculator((prevCalculator) => ({
            ...prevCalculator,
            current: "0.",
          }));
        }
      }
    } else {
      if (calculator.current.length < 12) {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          current: calculator.current + value,
        }));
      }
    }
  };

  const chooseOperationHandler = (opr, oprsign) => {
    if (calculator.current === "") {
      if (calculator.prevoius !== 0) {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          operations: { operator: opr, sign: oprsign },
        }));
      } else {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          prevoius: "0",
          operations: { operator: opr, sign: oprsign },
        }));
      }
    } else if (calculator.current === ".") {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        prevoius: "0",
        operations: { operator: opr, sign: oprsign },
      }));
    } else if (calculator.equal) {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        equal: "",
        seconNum: "",
        operations: { operator: opr, sign: oprsign },
        prevoius: calculator.current,
      }));
    } else if (calculator.prevoius) {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        operations: { operator: opr, sign: oprsign },
      }));
      let value = compute();
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        prevoius: value,
      }));
    } else {
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        prevoius: calculator.current,
        operations: { operator: opr, sign: oprsign },
      }));
    }
    updateCalculator((prevCalculator) => ({
      ...prevCalculator,
      operations: { operator: opr, sign: oprsign },
      current: "",
    }));
  };

  const equalHandler = (value) => {
    if (
      value === undefined ||
      calculator.current === null ||
      value == null ||
      calculator.current === undefined
    )
      return;
    if (value === "=") {
      if (calculator.current === "") return;
      if (calculator.current === "0.") {
        updateCalculator((prevCalculator) => ({
          ...prevCalculator,
          prevoius: "0",
        }));
      }
      let ans = compute();
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        operations: calculator.operations,
      }));
      calculator.prevoius
        ? updateCalculator((prevCalculator) => ({
            ...prevCalculator,
            seconNum: calculator.current,
          }))
        : updateCalculator((prevCalculator) => ({
            ...prevCalculator,
            prevoius: calculator.current,
          }));
      updateCalculator((prevCalculator) => ({
        ...prevCalculator,
        equal: value,
        current: ans,
      }));
    }
  };

  let buttons = [
    {
      value: "%",
      opr: true,
      onclick: () => calculatePercentage(),
    },
    {
      value: "CE",
      opr: true,
      onclick: () => clearCurrent("C"),
    },
    {
      value: "C",
      opr: true,
      onclick: () => allclearHandler("CE"),
    },
    {
      value: <BsBackspace />,
      opr: true,
      onclick: () => deleteHandler("dl"),
    },
    {
      value: (
        <div>
          <sup>1</sup>/<sub>x</sub>
        </div>
      ),
      opr: true,
      onclick: () => calculateReciprocal(),
    },
    {
      value: (
        <div>
          x<sup>2</sup>
        </div>
      ),
      opr: true,
      onclick: () => calculateSquare(),
    },
    {
      value: (
        <div>
          <sup>2</sup>
          <TbSquareRoot2 />
        </div>
      ),
      opr: true,
      onclick: () => calculateRoot(),
    },
    {
      value: <PiDivideLight />,
      opr: true,
      onclick: () =>
        chooseOperationHandler(
          "/",
          <PiDivideLight style={{ width: "10px", height: "10px" }} />
        ),
    },
    {
      value: "7",
      onclick: () => appendValueHandler("8"),
    },
    {
      value: "8",
      onclick: () => appendValueHandler("7"),
    },
    {
      value: "9",
      onclick: () => appendValueHandler("9"),
    },
    {
      value: <RxCross1 />,
      opr: true,
      onclick: () =>
        chooseOperationHandler(
          "*",
          <RxCross1 style={{ width: "10px", height: "10px" }} />
        ),
    },
    {
      value: "4",
      onclick: () => appendValueHandler("4"),
    },
    {
      value: "5",
      onclick: () => appendValueHandler("5"),
    },
    {
      value: "6",
      onclick: () => appendValueHandler("6"),
    },
    {
      value: <GoDash />,
      opr: true,
      onclick: () =>
        chooseOperationHandler(
          "-",
          <GoDash style={{ width: "10px", height: "10px" }} />
        ),
    },
    {
      value: "1",
      onclick: () => appendValueHandler("1"),
    },
    {
      value: "2",
      onclick: () => appendValueHandler("2"),
    },
    {
      value: "3",
      onclick: () => appendValueHandler("3"),
    },
    {
      value: <GoPlus />,
      opr: true,
      onclick: () =>
        chooseOperationHandler(
          "+",
          <GoPlus style={{ width: "10px", height: "10px" }} />
        ),
    },
    {
      value: (
        <div>
          <sup>+</sup>/<sub>-</sub>
        </div>
      ),
      onclick: () => signChange(),
    },
    {
      value: "0",
      onclick: () => appendValueHandler("0"),
    },
    {
      value: ".",
      onclick: () => appendValueHandler("."),
    },
    {
      value: "=",
      opr: true,
      eq: true,
      onclick: () => equalHandler("="),
    },
  ];

  return (
    <div className="main">
      <div className="backToHome">
        <Link to="/">
          <FcHome style={{ width: "50px", height: "50px" }} />
        </Link>
      </div>
      <div className="calculator">
        <div className="display">
          <div
            style={{
              display: "flex",
              opacity: "70%",
              height: "40px",
              alignItems: "center",
            }}
          >
            <h6>Calculator</h6>
            <div
              style={{
                gap: "30px",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                width: "100%",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            >
              <GoDash />
              <RxBox />
              <RxCross1 />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosMenu
              style={{
                marginLeft: "5px",
                width: "25px",
                height: "20px",
              }}
            />
            <h5>Standerd</h5>
          </div>
          <div style={{ maxWidth: "330px" }}>
            <div className="h4">
              <div>{calculator.prevoius}</div>
              {calculator.operations && <div>{calculator.operations.sign}</div>}
              <div>
                {calculator.seconNum ? calculator.seconNum : calculator.math}
              </div>
              <div>{calculator.equal}</div>
            </div>
            <div className="h1">
              {calculator.current
                ? calculator.current
                : calculator.prevoius
                ? calculator.prevoius
                : 0}
            </div>
          </div>
        </div>
        <div className="numberpad">
          {buttons.map((btn) => {
            if (btn.eq) {
              return (
                <button className="sum" onClick={btn.onclick}>
                  {btn.value}
                </button>
              );
            } else {
              return btn.opr ? (
                <button className="operant" onClick={btn.onclick}>
                  {btn.value}
                </button>
              ) : (
                <button className="number" onClick={btn.onclick}>
                  {btn.value}
                </button>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Calculator;

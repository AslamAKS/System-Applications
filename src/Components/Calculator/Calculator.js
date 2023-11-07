import React, { useState } from "react";
import "./Calculator.css";
import { IoIosMenu } from "react-icons/io";
import { RxCross1, RxBox } from "react-icons/rx";
import { BsBackspace } from "react-icons/bs";
import { PiDivideLight } from "react-icons/pi";
import { GoDash, GoPlus } from "react-icons/go";
import { TbSquareRoot2 } from "react-icons/tb";

function Calculator() {
  const [current, setCurrent] = useState("");
  const [prevoius, setPrevoius] = useState("");
  const [operations, setOperations] = useState("");
  const [seconNum, setSecondNum] = useState("");
  const [equal, setEqual] = useState("");
  const [math, setMath] = useState("");

  const deleteHandler = (value) => {
    if (value === "dl") {
      setCurrent(String(current).slice(0, -1));
    }
  };

  const allclearHandler = (value) => {
    if (value === "CE") {
      setCurrent("");
      setOperations("");
      setPrevoius("");
      setEqual("");
      setSecondNum("");
      setMath("");
    }
  };

  const clearCurrent = (value) => {
    if (value === "C") {
      setCurrent("");
    }
  };

  const calculatePercentage = () => {
    try {
      const result = (parseFloat(current) / 100).toString();

      if (!operations) {
        setEqual("");
        setOperations("");
        setSecondNum("");
        setPrevoius("0");
        setCurrent("0");
      } else if (equal) {
        setEqual("");
        setOperations("");
        setSecondNum("");
        setCurrent(result);
        setPrevoius(result);
      } else {
        setCurrent(result);
        setSecondNum(result);
      }
    } catch (error) {
      setCurrent("ERROR");
    }
  };

  const calculateRoot = () => {
    try {
      if (prevoius && operations) {
        setSecondNum(math);
        if (equal) {
          setEqual("");
          setOperations("");
          setSecondNum("");
          setPrevoius("");
          setMath("");
        }
      } else {
        setEqual("");
        setOperations("");
        setSecondNum("");
        setPrevoius("");
        setMath("");
      }
      if(current<0){
        setCurrent('Invalid Input')
      }
      // setPrevoius(current)
      let prv = current ? math : current;
      const result = Math.sqrt(parseFloat(current));
      setCurrent(result);
      if (math === "") {
        setMath("root(" + current + ")");
      } else {
        setMath("root(" + prv + ")");
      }
    } catch (error) {
      setCurrent("Invalid Input");
    }
  };

  const calculateReciprocal = () => {
    try {
      if (prevoius && operations) {
        setSecondNum(math);
        if (equal) {
          setEqual("");
          setOperations("");
          setSecondNum("");
          setPrevoius("");
          setMath("");
        }
      } else {
        setEqual("");
        setOperations("");
        setSecondNum("");
        setPrevoius("");
        setMath("");
      }

      let val = current ? math : current;
      const result = (1 / parseFloat(current)).toString();
      setCurrent(result);
      if (math === "") {
        setMath("1/(" + current + ")");
      } else {
        setMath("1/(" + val + ")");
      }
    } catch (error) {
      setCurrent("ERROR");
    }
  };

  const calculateSquare = () => {
    try {
      if (prevoius && operations) {
        setSecondNum(math);
        if (equal) {
          setEqual("");
          setOperations("");
          setSecondNum("");
          setPrevoius("");
          setMath("");
        }
      } else {
        setEqual("");
        setOperations("");
        setSecondNum("");
        setPrevoius("");
        setMath("");
      }
      let sqr = current ? math : current;
      const result = parseFloat(current) * parseFloat(current);
      setCurrent(result);
      if (math === "") {
        setMath("sqr(" + current + ")");
      } else {
        setMath("sqr(" + sqr + ")");
      }
    } catch (error) {
      setCurrent("ERROR");
    }
  };

  const signChange = () => {
    if (current === "") return;
    if (equal) {
      setEqual("");
      setOperations("");
      setSecondNum("");
      setPrevoius("");
      setMath("negate(" + current + ")");
      setCurrent(-current);
    }
    if (math === "") {
      setMath("negate(" + current + ")");
    } else {
      setMath("negate(" + math + ")");
    }
    setCurrent(-current);
    // try {
    //   if (prevoius && operations) {
    //     setSecondNum(math);
    //     if (equal) {
    //       setEqual("");
    //       setOperations("");
    //       setSecondNum("");
    //       setPrevoius("");
    //       setMath("");
    //     }
    //   } else {
    //     setEqual("");
    //     setOperations("");
    //     setSecondNum("");
    //     setPrevoius("");
    //     setMath("");
    //   }
    //   let sqr = current ? math : current;
    //   const result = -current;
    //   setCurrent(result);
    //   if (math === "") {
    //     setMath("sqr(" + current + ")");
    //   } else {
    //     setMath("sqr(" + sqr + ")");
    //   }
    // } catch (error) {
    //   setCurrent("ERROR");
    // }
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(prevoius);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
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
      if (current.includes(".")) {
        return;
      } else {
        if (current === "") {
          setCurrent("0.");
        }
      }
    } else {
      if (current.length < 12) {
        setCurrent(current + value);
      }
    }
  };

  const chooseOperationHandler = (el) => {
    if (current === "") {
      setPrevoius("0");
      setOperations(el);
    } else if (current === ".") {
      setPrevoius("0");
      setOperations(el);
    } else if (equal) {
      setEqual("");
      setSecondNum("");
      setOperations(el);
      setPrevoius(current);
    } else if (prevoius) {
      // setPrevoius(current);
      setOperations(el);
      let value = compute();
      setPrevoius(value);
    } else {
      setPrevoius(current);
      setOperations(el);
    }
    setOperations(el);

    setCurrent("");
  };

  const equalHandler = (value) => {
    if (
      value === undefined ||
      current === null ||
      value == null ||
      current === undefined
    )
      return;
    if (value === "=") {
      if (current === "") return;
      if (current === "0.") setPrevoius("0");
      let ans = compute();
      setOperations(operations);
      prevoius ? setSecondNum(current) : setPrevoius(current);
      setEqual(value);
      setCurrent(ans);
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
      onclick: () => chooseOperationHandler("/"),
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
      onclick: () => chooseOperationHandler("*"),
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
      onclick: () => chooseOperationHandler("-"),
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
      onclick: () => chooseOperationHandler("+"),
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
            <div className="h4" style={{ height: "30px" }}>
              {prevoius}

              {operations}

              {seconNum ? seconNum : math}

              {equal}
            </div>
            <div className="h1">{current ? current : "0"}</div>
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

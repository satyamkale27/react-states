import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  console.log(step);
  function handelPrevious() {
    if (step > 1) setStep((S) => S - 1);
  }

  function handelNext() {
    if (step < 3) setStep((sn) => sn + 1);
  }

  return (
    // (!isopen) ! this operator changes, if isopen if false it become true //
    // &times displays X button symbol //
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgcolor="#7950f2" textcolor="#fff" onclick={handelPrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgcolor="#7950f2" textcolor="#fff" onclick={handelNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textcolor, bgcolor, onclick, children }) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: textcolor }}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
// children prop is made automaticly  </Button>
//   <Button bgcolor="#7950f2" textcolor="#fff" onclick={handelNext}>
//   Next <span>👉</span> // this is children prop between two open and close tag of component
// </Button>
// the elements betweem two button components has a clildren prop that is automaticly made//
// recived children prop here function Button({ textcolor, bgcolor, onclick, children }) //

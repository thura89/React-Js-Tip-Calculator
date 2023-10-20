import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tip Calculator</h1>
        <TipCalculator></TipCalculator>
      </header>
    </div>
  );
}

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);

  const tip = bill * ((percent1 + percent2) / 2 / 100);

  const resetHandling = () => {
    setBill("");
    setPercent1(0);
    setPercent2(0);
  };
  return (
    <>
      <Bill bill={bill} setBill={setBill}>
        <h4>How Much was the Bill ? </h4>
      </Bill>
      <SatifactionPercent percent={percent1} setPercent={setPercent1}>
        <h2>How did you like the service ? </h2>
      </SatifactionPercent>
      <SatifactionPercent percent={percent2} setPercent={setPercent2}>
        <h2>How did you like your friend service ? </h2>
      </SatifactionPercent>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip}></Output>
          <Reset resetHandling={resetHandling}></Reset>
        </>
      )}
    </>
  );
};

const Bill = ({ children, bill, setBill }) => {
  return (
    <div style={{ display: "flex" }}>
      {children}
      <input
        value={bill}
        style={{
          width: "200px",
          height: "50px",
          marginTop: "20px",
          fontSize: "18px",
        }}
        type="text"
        placeholder="bill.."
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
};

const SatifactionPercent = ({ children, percent, setPercent }) => {
  return (
    <div style={{ display: "flex" }}>
      <h6>{children}</h6>
      <select
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
        style={{
          width: "250px",
          height: "50px",
          marginTop: "50px",
          fontSize: "18px",
          marginLeft: "5px",
        }}
      >
        <option value="0">Dissatisfaction 0%</option>
        <option value="5">It was OK 5%</option>
        <option value="10">It was Good 10%</option>
        <option value="20">Absolutely Amazing 20%</option>
      </select>
    </div>
  );
};

const Output = ({ bill, tip }) => {
  return (
    <div>
      <h3 style={{ color: "red" }}>{`Your should pay ${
        bill + tip
      } (Bill ${bill} + Tip ${tip})`}</h3>
    </div>
  );
};

const Reset = ({ resetHandling }) => {
  return (
    <div>
      <button
        onClick={() => {
          resetHandling();
        }}
        style={{
          padding: "20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          fontSize: "18px",
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default App;

import './App.css';

function CalcButton({label}) {
  function handleClick() {
    alert('you clicked!');
  }

  return (
    <button  className="CalcButton" onClick={handleClick}>
      {label}
    </button>
  );
}

function CalcDisplay() {
  return (
    <div className="CalcDisplay">
      0
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <CalcDisplay />
      <div className="ButtonContainer">
        <CalcButton label={"+"} />
        <CalcButton label={9} />
        <CalcButton label={8} />
        <CalcButton label={7} />
        <CalcButton label={"-"} />
        <CalcButton label={6} />
        <CalcButton label={5} />
        <CalcButton label={4} />
        <CalcButton label={"*"} />
        <CalcButton label={3} />
        <CalcButton label={2} />
        <CalcButton label={1} />
        <CalcButton label={"division"} />
        <CalcButton label={"="} />
        <CalcButton label={0} />
        <CalcButton label={"C"} />
      </div>
      </div>
  );
}

export default App;
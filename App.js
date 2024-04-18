import './App.css';

// function CalcButton({label}) {
//   function handleClick() {
//     alert('you clicked!');
//   }

//   return (
//     <button  className="CalcButton" onClick={handleClick}>
//       {label}
//     </button>
//   );
// }

function Dizon({display}) {
  return(
    <div className="Dizon">
      {display}
    </div>
  );
}

function Dizon2(){
  return(
    <div className="Dizon2">
      <div className="top">
        <div className='topleft'>
          <div class="item1">1</div>
          <div class="item2">2</div>
        </div>
        <div class="item3">3</div>
        <div class="item4">4</div>
      </div>

      <div className="bottom">
        <div class="item5">5</div>
        <div class="item6">6</div>
        <div class="item7">7</div>
        <div class="item8">8</div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Dizon display={"hello world"}/>
      <Dizon2/>
      </div>
  );
}

export default App;
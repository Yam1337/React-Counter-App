import './App.css';
import React from "react";

function App() {
  let [currNumber, setCurrNumber] = React.useState(0);
  let addNumber = () => {
    setCurrNumber(currNumber + 1)
  }
  return (
    <div className="bckgr">
      <div className="container">
        <div className="items">
          <div className="counter" id="number">{currNumber}</div>
          <div>Counter App</div>
          <button className="items" id="clicker" onClick ={addNumber}>Count!</button>
        </div>
      </div>
    </div>
  );
}

export default App;

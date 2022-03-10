import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {

const [count, setCount] = useState(0);

let incrementCount = () => {
  setCount(count + 1);
};

let decrementCount = () => {
  if (count === 0) {
    return;
}
  setCount(count - 1);
};
 //reset counter 
 let reset = () =>{
  setCount(0)
}

const onChange = (event) => {
  setCount(event.target.value);
};

return (
    <div className="app">
      <div className="frame">
        <div className="center">
          <div className="crementor">
          <Button classname={"crementor__min"} title={"-"} action={decrementCount} />
          <input className="crementor__value" value={count} type="number" onChange={onChange} />
          <Button classname={"crementor__plus"} title={"+"} action={incrementCount} />
          </div>
          <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
        </div>	
      </div>
    </div>
  );
}

export default App;

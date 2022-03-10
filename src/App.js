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

let onChange = (event) => {
  if (event.target.value < 0) {
    setCount(0);
  }else{
    setCount(event.target.value);
  }
  
};

return (

    <div className="app">
      <h1 className="text-3xl font-bold underline text-center	leading-6 mt-5	"> Increment/Decrement Counter Demo</h1>
      <div className="frame">
        <div className="center">
          <div className="crementor">
          <Button classname={"crementor__min"} title={"-"} action={decrementCount} />
          <input className="crementor__value" value={count} type="number" min="0" onChange={onChange} />
          <Button classname={"crementor__plus"} title={"+"} action={incrementCount} />
          </div>
          <div className="text-center">
            <button type="button" className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800" onClick={reset}>Reset</button>
          </div>	
        </div>	
      </div>
    </div>
  );
}

export default App;

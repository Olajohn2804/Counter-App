import { useState } from "react";

const App = () => {
  // let num = 0;
  const [count, setCount] = useState(0)
  const increament = ()=>{
      setCount(prevCount=>prevCount+1);
  }
  const decreament = ()=>{
    setCount(prevCount=>prevCount-1);
}
  return (
    <>
      <div className="counter">
            <button className="counter--minus" onClick={decreament}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={increament}>+</button>
        </div>
    </>
  )
}

export default App

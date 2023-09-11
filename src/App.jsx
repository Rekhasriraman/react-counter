import { useState } from 'react'
import Button from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseHandler = () => {
    setCount((count) => count + 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  const decreaseHandler = () => {
    setCount((count) => count - 1);
  };

  const setColor = () => {
    if (count > 0) {
      return 'green'
    }else if (count < 0) {
      return 'red'
    }else {
      return 'blue'
    }
  }

  return (
      <div>
        <h1 className={setColor()}>{count}</h1>
        <Button styling = "Increase" text="Increase" clickHandler={increaseHandler} />
        <Button styling = "Reset" text="Reset" clickHandler={resetHandler} />
        <Button styling = "Decrease" text="Decrease" clickHandler={decreaseHandler} />
</div>
  );
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  const increment = () => {
    setCount(count + 1);
    console.log("increment count", count);
  };
  const decrement=()=>{
    setCount(count-1);
    console.log("decrement count",count)
  }

  return (
    <div class="counter">
      <h1>Counter App</h1>
      <h2>Count:{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App

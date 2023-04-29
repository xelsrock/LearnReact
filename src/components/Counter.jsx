import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)  
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>кнопка</button>
        <button onClick={decrement}>кнопка 1</button>
      </div>
  )

}

export default Counter;
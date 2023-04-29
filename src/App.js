import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('Текст в инпуте')

  function increment() {
    setLikes(likes + 1)  
  }

  function decrement() {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
        type='text'
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={increment}>кнопка</button>
      <button onClick={decrement}>кнопка 1</button>
    </div>
  )
}

export default App;

import React, { useState } from "react";
import Counter from "./components/Counter.jsx";
import ClassCounter from "./components/ClassCounter.jsx";
import './styles/App.css';

function App() {
  const [value, setValue] = useState('Текст в инпуте')

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>
            JavaScript - язык прогламмирования
          </div>
        </div>
        <div className="post__btns">
            <button>Удалить</button>
        </div>
      </div>
    </div>
  )
}

export default App;

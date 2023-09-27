import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    (count < 10) ? setCount(count + 1) : setCount(0);
  }

  const onClickMinus = () => {
    (count > -10) ? setCount(count - 1) : setCount(0);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={onClickMinus}>- Минус</button>
        <button className="plus" onClick={onClickPlus}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;

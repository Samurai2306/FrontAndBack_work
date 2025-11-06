import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h3>Счётчик</h3>
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      <div className="counter-controls">
        <button onClick={decrement} className="counter-btn counter-btn-decrement">
          −
        </button>
        <button onClick={reset} className="counter-btn counter-btn-reset">
          Сброс
        </button>
        <button onClick={increment} className="counter-btn counter-btn-increment">
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;


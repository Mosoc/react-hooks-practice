import React, { useState } from 'react';

function CounterEnhancement() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prevCount => {
      return prevCount + 1;
    });
  };

  const handleDecrease = () => {
    setCount(prevCount => {
      return prevCount - 1;
    });
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <section>
      <h2>Multiple Click Handlers</h2>
      <h3>Full counter</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <p>{count}</p>
    </section>
  );
}

export default CounterEnhancement;

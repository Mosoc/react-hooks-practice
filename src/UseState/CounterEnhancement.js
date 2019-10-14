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
    setCount(() => {
      return 0;
    });
  };

  return (
    <section>
      <h2>Full counter</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <p>{count}</p>
    </section>
  );
}

export default CounterEnhancement;
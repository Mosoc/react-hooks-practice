import React from 'react';
import AsBoolean from './UseState/AsBoolean';
import Counter from './UseState/Counter';
import CounterEnhancement from './UseState/CounterEnhancement'

import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hooks Practice</h1>
      <AsBoolean />
      <Counter />
      <CounterEnhancement />
    </div>
  );
}

export default App;

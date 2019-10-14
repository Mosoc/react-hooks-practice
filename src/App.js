import React from 'react';
import AsBoolean from './UseState/AsBoolean';
import Counter from './UseState/Counter';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hooks Practice</h1>
      <AsBoolean />
      <Counter />
    </div>
  );
}

export default App;

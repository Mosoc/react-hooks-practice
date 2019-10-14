import React, { useState } from 'react';
import AsBoolean from './UseState/AsBoolean';
import Counter from './UseState/Counter';
import './App.css';

function App() {
  const [activated, setActivated] = useState(false);
  const buttonText = activated ? 'Active' : 'Inactive';
  function handleClick() {
    setActivated(!activated);
  }
  return (
    <div className="container">
      <h1>Hooks Practice</h1>
      <AsBoolean />
      <Counter />
    </div>
  );
}

export default App;

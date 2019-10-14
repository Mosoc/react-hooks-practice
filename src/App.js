import React, { useState } from 'react';
import AsBoolean from './UseState/AsBoolean'

function App() {
  const [activated, setActivated] = useState(false);
  const buttonText = activated ? 'Active' : 'Inactive';
  function handleClick() {
    setActivated(!activated);
  }
  return (
    <React.Fragment>
      <h1>Hooks Practice</h1>
      <AsBoolean />
    </React.Fragment>
  );
}

export default App;

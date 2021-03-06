import React, { useState } from 'react';

function AsBoolean() {
  const [activated, setActivated] = useState(false);
  const buttonText = activated ? 'Active' : 'Inactive';
  function handleClick() {
    setActivated(!activated);
  }
  return (
    <React.Fragment>
      <h2>useState</h2>
      <section>
        <div>
          <label>Use an arrow function in props:</label>
          <button
            onClick={() => {
              setActivated(!activated);
            }}
          >
            {buttonText}
          </button>
        </div>
        <div>
          <label>Use predefined function: </label>
          <button onClick={handleClick}>{buttonText}</button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AsBoolean;

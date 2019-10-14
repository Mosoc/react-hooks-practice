import React, {useState} from 'react';

function App(){
  const [activated, setActivated] = useState(false);
  const buttonText = activated ? 'Active': 'Inactive';
  function handleClick() {
    setActivated(!activated)
  }
  return (
    <React.Fragment>
      <label>Use an arrow function in props</label>
      <button onClick={()=>{setActivated(!activated)}} >
        {buttonText}
      </button>
      <label>Use predefined function</label>
      <button onClick={handleClick} >
        {buttonText}
      </button>
    </React.Fragment>
  )
}


export default App;

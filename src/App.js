import React, {useState} from 'react';

function App(){
  const [activated, setActivated] = useState(false);
  const buttonText = activated ? 'Active': 'Inactive';
  return (
    <React.Fragment>
      <button onClick={()=>{setActivated(!activated)}} >
        {buttonText}
      </button>
    </React.Fragment>
  )
}


export default App;

import React, { useState } from 'react';

function CountyAndCity() {
  const [state, setState] = useState({
    city: '',
    country: ''
  });
  return (
    <section>
      <form>
        <input type="text" value={state.city} placeholder="City" />
        <input type="text" value={state.country} placeholder="Country" />
        <div>You live in {`${state.city}, ${state.country}`}</div>
      </form>
    </section>
  );
}

export default CountyAndCity;

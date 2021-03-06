import React, { useState } from 'react';

function CountyAndCity() {
  const [state, setState] = useState({
    city: '',
    country: ''
  });

  function handleCityChange(event) {
    setState({
      ...state,
      city: event.target.value
    });
  }

  function handleCountryChange(event) {
    setState({
      ...state,
      country: event.target.value
    });
  }

  return (
    <section>
      <h2>The useState Hook with an Object Argument</h2>
      <form>
        <input
          type="text"
          placeholder="City"
          value={state.city}
          onChange={handleCityChange}
        />
        <input
          type="text"
          placeholder="Country"
          value={state.country}
          onChange={handleCountryChange}
        />
        <div>
          <p>You live in {`${state.city}, ${state.country}`}</p>
        </div>
      </form>
    </section>
  );
}

export default CountyAndCity;

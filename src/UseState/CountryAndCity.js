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
        <div>You live in {`${state.city}, ${state.country}`}</div>
      </form>
    </section>
  );
}

export default CountyAndCity;

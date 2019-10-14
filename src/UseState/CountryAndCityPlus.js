import React, { useState } from 'react';

function CountyAndCityPlus() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  function handleCityChange(event) {
    setCity(event.target.value)
  }

  function handleCountryChange(event) {
    setCountry(event.target.value)
  }

  return (
    <section>
      <h2>Working with Multiple Pieces of State in a Hooks-Based
      Component</h2>
      <form>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={handleCityChange}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={handleCountryChange}
        />
        <div>
          <p>You live in {`${city}, ${country}`}</p>
        </div>
      </form>
    </section>
  );
}

export default CountyAndCityPlus;

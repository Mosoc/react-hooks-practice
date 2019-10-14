import React from 'react';
import AsBoolean from './UseState/AsBoolean';
import Counter from './UseState/Counter';
import CounterEnhancement from './UseState/CounterEnhancement';
import CountryAndCity from './UseState/CountryAndCity';
import CountyAndCityPlus from './UseState/CountryAndCityPlus'


import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hooks Practice</h1>
      <AsBoolean />
      <Counter />
      <CounterEnhancement />
      <CountryAndCity />
      <CountyAndCityPlus />
    </div>
  );
}

export default App;

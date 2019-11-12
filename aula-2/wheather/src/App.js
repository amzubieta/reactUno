import React from 'react';
import sol from './img/sol.png';
import nuvens from './img/nuvens.png'
import Weather_table from './Components/Weather_table'
import './App.css';

function App() {
  return (
    <div className="previsao-container">
      <Weather_table
      date="31/05/2019"
      estado="Ensolarado"
      img={sol}
      nivelMax="Máxima"
      temperaturaMax="31ºC"
      nivelMin="Minima"
      temperaturaMin="20ºC"
      />
      <Weather_table
      date="01/06/2019"
      estado="Nublado"
      img={nuvens}
      nivelMax="Máxima"
      temperaturaMax="25ºC"
      nivelMin="Minima"
      temperaturaMin="18ºC"
      />

    </div>
  );
}

export default App;

import React from 'react';
import sol from './sol.png';
import nuvens from './nuvens.png'
import Weather_table from './Components/Weather_table'
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather_table
      date="31/05/2019"
      estado="Ensolarado"
      img={sol}
      nivelMax="Máxima"
      temperaturaMax="31ºC"
      nivelMin="Minima"
      temperaturaMin="20ºC"
      />
      
    </div>
  );
}

export default App;

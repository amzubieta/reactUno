import React from 'react';
import logo from './logo.svg';
import './App.css';

// const nameString = Angel;
// const saudacao = obj => `Olá, ${nameString}`;

// {
//   const saudacao = 
//     nome: "Larysa",
// }

// const saudacao = obj => `Olá, ${obj.nome} ${obj.sobrenome}`;

const contador = 0;

const vereficaContador = () => {
  if (contador === 0) {
    return (<p>Contador iniciado</p>)
  } else {
    return (<p>Contador iniciado</p>)
  }
}

function App() {
  return (
    <div className="App">
      <h1>Contador</h1>
      <p>{contador}</p>
      {vereficaContador()}
      <div>
        <button className="claseMasUno">+1</button>
        <button className="claseMenosUno">-1</button>
        <button className="claseResetar">Reset</button>
      </div>

    </div>
  );
}


export default App;

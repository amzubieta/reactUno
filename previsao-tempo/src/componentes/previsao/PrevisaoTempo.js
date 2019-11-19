import React, { Component } from 'react';
import previsoes from '../../dados/previsoes';

class PrevisaoTempo extends Component{
  constructor (props){
    super(props)
  }
  render(){
  return (
    <div className="previsao">
      <h2 className="previsao__data">{previsoes.data}</h2>
      <p className="previsao__resumo">{previsoes.resumo}</p>

      <img src={previsoes.imagem} className="previsao__img" />

      <table className="previsao-temperatura">
        <tr className="previsao-temperatura__linha">
          <td>Máxima</td>
          <td>{previsoes.temperatura.max} oC</td>
        </tr>
        <tr className="previsao-temperatura__linha">
          <td>Mínimo</td>
          <td>{previsoes.temperatura.min} oC</td>
        </tr>
      </table>

    </div>
  )
}
}

export default PrevisaoTempo;
import React from 'react';
import PrevisaoTempo from './componentes/previsao/PrevisaoTempo';
import Contador from './componentes/contador/Contador';
import Comentarios from './componentes/comentarios/Comentarios';
import comentarios from './dados/comentarios';
import previsoes from './dados/previsoes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilidade: true
    };
  }
  render() {
    return (
      <div className="container">
        
        <div className="previsao">
        {previsoes.map((previsao)=>(
        <PrevisaoTempo 
        data={previsoes.data}
        resumo={previsoes.resumo}
        imagem={previsoes.imagem}
        temperaturaMax={previsoes.temperatura.max}
        temperaturaMin={previsoes.temperatura.min}
        />
        ))
        }
        </div>

        <div className="contador">
        <Contador />
        </div>

        <div className="comentarios">
          {comentarios.map((comentario) => (
            <Comentarios
              nome={comentario.autora.nome}
              imagem={comentario.autora.nome}
              subtitulo={comentario.subtitulo}
              texto={comentario.text}
            />
          ))
          }
        </div>
      </div>
    );
  }
}

export default App;

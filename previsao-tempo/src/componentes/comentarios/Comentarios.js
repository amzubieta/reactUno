import React, { Component } from 'react';
import comentarios from '../../dados/comentarios';

class Comentarios extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
          <div className="comentarios">
            <img className="comentario__perfil" src={comentarios.imagem} />
            <div>
              <h2 className="comentario__nome">{comentarios.autora.nome}</h2>
              <h3 className="comentario__subtitulo">{comentarios.subtitulo}</h3>
              <hr />
              <p>{comentarios.texto}</p>
            </div>
          </div>
        )
        }
  }

export default Comentarios;
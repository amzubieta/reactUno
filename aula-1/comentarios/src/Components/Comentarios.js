import React from 'react';

const DivDetalles = props => {
    return (
        <div>
            <h3 className="comentario__nome">{props.nome}</h3>
            <p className="comentario__subtitulo">{props.titulo}</p>
            <hr />
            <p className="comentario">{props.descricao}</p>
        </div>
    )
}


const Comentarios = props => {
    return (
        <div className="comentario">
            <img className="comentario__perfil" src={props.img} />
            <DivDetalles
                nome={props.nome}
                titulo={props.titulo}
                descricao={props.descricao}
            />
        </div>
    )
}

export default Comentarios;
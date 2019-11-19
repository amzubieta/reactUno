import React from 'react'

function CaixaTexto (props){

    function validaCampo(evento){
        props.mudaEstado(evento.name, evento.target.value)
    }
}
    
    
    return(
        <input
        name={props.name}
        type='text'
        className='campo'
        placeholder={props.placeholder}
        onChange={validaCampo}
        />
    )



export default CaixaTexto
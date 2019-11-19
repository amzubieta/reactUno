import React from 'react'
import CaixaTexto from './CaixaTexto'

function Grupo (props){
    return(
        <div>
            {props.children}
    {props.erro && <p className='gruo_erro'>{props.erro}</p>}
        </div>
    )
}

Grupo.Legenda=Legenda
Grupo.CaixaTexto=CaixaTexto

export default Grupo
import React from 'react'; 

const BotaoContador = props => {
    return (
        <div>
            <button className="btnMaisUm" disabled={props.disabled} onClick={props.cliqueaddUm}>
                +1
            </button>
            <button className="btnMenosUm" disabled={props.disabled} onClick={props.cliquesubUm}>
                -1
            </button>
            <button className="btnResetar" onClick={props.cliqueresetar}>
                resetar
            </button>
        </div>

    );
}

export default BotaoContador;
import React from 'react';
import BotaoAlternar from './BotaoAlternar';
import CongelarContador from './CongelarContador';
import BotaoContador from './BotaoContador';


export default class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            visibilidade: true,
            congelado: false
        };
    }

    adicionarUm = () => {
        this.setState((prevState) => {
            return {
                contador: prevState.contador + 1
            }
        })
    }

    subtrairUm = () => {
        this.setState(prevState => {
            return {
                contador: prevState.contador - 1
            }
        })
    }

    resetar = () => {
        this.setState(() => {
            return {
                contador: 0,
                congelado: false
            }
        })
    }

    alternarVisibilidade = () => {
        this.setState((estadoAnterior) => {
            return {
                visibilidade: !estadoAnterior.visibilidade
            }
        })
    }

    congelarContador = () => {
        this.setState(() => {
            return {
                congelado: true
            }
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.contador}</p>
                <BotaoAlternar
                    onClickMetodo={this.alternarVisibilidade}
                    visibilidade={this.state.visibilidade}
                />
                
                {this.state.visibilidade && (
                <BotaoContador
                disabled={this.state.congelado}
                cliqueaddUm={this.state.adicionarUm}
                cliquesubUm={this.state.subtrairUm}
                cliqueresetar={this.state.resetar}
                />

                )}
                {this.state.contador !== 0 && (
                <CongelarContador
                cliquecongelarCont={this.state.congelarContador}
                />
                )}
                
            </div>
        );
    }
}

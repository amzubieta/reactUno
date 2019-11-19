import React from 'react'
import

    class Formulario extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                nome: {
                    valor: '',
                    erro: ''
                }
            email: {
                    valor: '',
                    erro: ''
                }
            pais: {
                    valor: '',
                    erro: ''
                }
            mensagem: {
                    valor: '',
                    erro: ''
                }
            }
        }

        handleChange = (nomeDoCampo, valorDoCampo, erroDoCampo = '') => {
            this.setState({
                [nomeDoCampo]: {
                    valor: valorDoCampo,
                    erro: erroDoCampo
                }
            })

        }

        render() {
            return (
                <div className='pagina'>
                    <h2>Entre em contato conosco!</h2>
                    <form className='formulario'>
                        <Grupo erro={this.state.nome.erro}>
                            <Grupo.Legenda htmlFor='nome' nome
                    </Grupo>
                </form>
            </div>
                    )
                }
            }
            
            export defaul Formulario
            
            
// <CaixaTexto
                        //                         name='nome'
                        //                         placeholder='Digite seu nome:'
                        //                         mudaEstado={this.handleChange}
                        //                     />
                        //                     <CaixaTexto
                        //                         name='email'
                        //                         placeholder='Digite seu email:'
                        //                         mudaEstado={this.handleChange}
                        //                     />
                        //                     <CaixaTexto
                        //                         name='pais'
                        //                         placeholder='Digite seu país:'
                        //                         mudaEstado={this.handleChange}
                        //                     />
                        //                     <CaixaTexto
                        //                         name='mensagem'
                        //                         placeholder='Digite sua mesagem:'
                        //                         mudaEstado={this.handleChange}
                        //                     />
                        import Grupo from './Grupo'
                    import Grupo from './Grupo'
        

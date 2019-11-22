import React from 'react'
import{ getMesagens } from '../../service/base'


import './styles.css'

class chat extends React.Component{
  constructor(props){
    super(props)
    this.state={
      mensagens:''
    }
  }

  componentDidMount(){
    getMesagens()
    .then(response =>{
      this
    })
    .catch(error=>{

    })
  }

  render()
}

function Chat () {
  return (
    <section className='chat'>
      <h2>Essa é a página de Chat</h2>
    </section>
  )
}


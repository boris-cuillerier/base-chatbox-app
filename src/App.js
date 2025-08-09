import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {

  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo || 'Anonyme'
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message_${Date.now()}`] = message
    this.setState({ messages })
  }

  render () {
    return (
      <div className='box'>
        <div>
          <div className='messages'>
            <Message></Message>
          </div>
        </div>
        <Form
          length={140}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}
        ></Form>
      </div>
      
    )
  }
}

export default App

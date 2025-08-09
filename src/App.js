import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Message from './components/Message'
import base from './base'

class App extends Component {

  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo || 'Anonyme'
  }

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message_${Date.now()}`] = message
    this.setState({ messages })
  }

  render () {
    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <Message
          key={key}
          pseudo={this.state.messages[key].pseudo}
          message={this.state.messages[key].message}
        ></Message>
      ))
    return (
      <div className='box'>
        <div>
          <div className='messages'>
            <div className="message">
              { messages }
            </div>
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

import React, { Component, createRef } from 'react'
import './App.css'
import Form from './components/Form'
import Message from './components/Message'
import base from './base'

class App extends Component {

  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo || 'Anonyme'
  }

  messagesRef = createRef()

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message_${Date.now()}`] = message
    Object.keys(messages).slice(0, -10).forEach(key => {messages[key] = null})
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
          <div className='messages' ref={this.messagesRef}>
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

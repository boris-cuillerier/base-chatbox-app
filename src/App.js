import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'

class App extends Component {
  render () {
    return (
      <div className='box'>
        <div>
          <div className='messages'>

          </div>
        </div>
        <Form></Form>
      </div>
      
    )
  }
}

export default App

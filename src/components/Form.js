import React, { Component } from "react"

class Form extends Component {

    state = {
        message: '',
        length: this.props.length || 140
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props
        const message = {
            pseudo,
            text: this.state.message
        }
        addMessage(message)

        // Reset the message input
        this.setState({ message: '', length: this.props.length || 140 })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event => {
        event.preventDefault()
        const message = event.target.value
        this.setState({ message })
    }

    handleKeyUp = event => {
        if (event.key === 'Enter' && !event.shiftKey) {
            this.createMessage()
        }
    }
    
    render() {
        return (
            <form className="form"
                onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    required
                    maxLength={this.state.length} />
                <div className="info">
                    {this.state.length - this.state.message.length} remaining
                </div>
                <button type="submit">Envoyer</button>
            </ form>
        )
    }
}

export default Form;
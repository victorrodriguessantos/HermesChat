import React, { Component } from 'react';
import io from 'socket.io-client';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      input: ''
    };

    this.messageInput = React.createRef();
  }

  componentDidMount() {
    this.socket = io('http://localhost:3001');

    this.socket.off('chatMessage');

    this.socket.on('chatMessage', (message) => {
      this.setState((prevState) => ({
        messages: [...prevState.messages, message]
      }));
    });
  }

  sendMessage = (message) => {
    this.socket.emit('chatMessage', message);
  };

  handleSendMessage = () => {
    const message = this.messageInput.current.value;
    if (message.trim() !== '') {
      this.sendMessage(message);
      this.messageInput.current.value = '';
    }
  };

  render() {
    return (
      <div>
        <div>
          {this.state.messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
        <input type="text" ref={this.messageInput} />
        <button onClick={this.handleSendMessage}>Enviar</button>
      </div>
    );
  }
}

export default Chat;
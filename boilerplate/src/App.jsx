import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

 class App extends Component {
//sets initial state of app
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      username : {name: "Anonymous"},
      messages: [],
      value: '',
      userCounter: ''
    };
    this.createNewMessage = this.createNewMessage.bind(this);
  }

  createNewMessage(event) {
    const newMessage = {
      username: event.username,
      content: event.content,
      type: event.type
    }
    this.setState({username: {name: newMessage.username}})
    this.socket.send(JSON.stringify(newMessage));
  }

//recieving data from server (data down)
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:8080');
    this.socket.onopen = (event) => {
      this.socket.onmessage = (event) => {
        const dataDown = JSON.parse(event.data);
        switch(dataDown.type) {
          case "incomingMessage":
          case "incomingNotification":
          const updatedMessage = dataDown;
          const newMessages = this.state.messages.concat(updatedMessage);
          this.setState({messages: newMessages});
          break;
          case "clientCounter":
          const clientCount = dataDown.content
          this.setState({userCounter: clientCount});
          break;
          default:
          throw new Error("Unknown event type " + dataDown);
        }
      };
    }
  }

  render() {
    console.log("Rendering App.jsx")
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
          <h3>{this.state.userCounter} users online</h3>
        </nav>
        <MessageList
        messages={this.state.messages}
        />
        <ChatBar
        username={this.state.username.name}
        addMessage={this.createNewMessage}
        />
      </div>
    );
  }
}

export default App;
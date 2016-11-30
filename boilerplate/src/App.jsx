import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [
        {
          id: 0,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 1,
          username: "Jimmy",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        },
        {
          id: 3,
          username: "Mike",
          content: "Suh dude"
        }
      ]
    }
  }
  componentDidMount() {
    setTimeout(() => {
      // creating new message
      const newMessage = {id: 4, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)


      // Update the state of the app component.
      // set State calls render() in App and all its children
      this.setState({messages: messages})
    }, 3000);
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} />
      </div>
    );
  }
}
export default App;
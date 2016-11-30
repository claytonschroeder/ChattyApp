//app.jsx is the parent which needs access to messages and the currentUser.
//to get the data from its "children"  it must import:
// MessageList (messages) and ChatBar (currentUser).
import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    }
  }
  //concatinates a new message from the input
  addMessage(username, content) {
    console.log('app component received username', username, 'and content', content);
    let newMessage = {username: username, content: content, id: Date.now()};
    let listWithNewMessage = this.state.messages.concat(newMessage);
    this.setState({messages: listWithNewMessage});
  }

  // componentDidMount() {
  //   console.log("componentDidMount <App />");
  //   setTimeout(() => {
  //     console.log("Simulating incoming message");
  //     // Add a new message to the list of messages in the data store
  //     const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
  //     const messages = this.state.messages.concat(newMessage)
  //     // Update the state of the app component.
  //     // Calling setState will trigger a call to render() in App and all child components.
  //     this.setState({messages: messages})
  //   }, 3000);
  // }
//rednders the message list with the state of messages
  render() {
    console.log("Rendering <App />");
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} newMessage={this.addMessage.bind(this)}/>
      </div>
    );
  }
}
export default App;
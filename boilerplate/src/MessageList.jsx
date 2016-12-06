import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log("Rendering MessageList.jsx")
    return (
      <div id="message-list">
        {this.props.messages.map(function(msg, index) {
          return <Message
            key={index}
            type={msg.type}
            username={msg.username}
            content={msg.content}
          />
        })}
      </div>
    );
  }
}
export default MessageList;
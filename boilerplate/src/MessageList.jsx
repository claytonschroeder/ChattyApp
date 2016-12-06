import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log("Rendering MessageList.jsx")
    return (
      <div id="message-list">
        {this.props.messages.map(function(msg) {
          return <Message
            key={msg.id}
            type={msg.type}
            username={msg.username}
            content={msg.content}
          />
        })}
        <div className="message system">
        </div>
      </div>
    );
  }
}
export default MessageList;
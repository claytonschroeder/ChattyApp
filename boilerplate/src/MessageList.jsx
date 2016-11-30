
import React, {Component} from 'react';
import Message from './Message.jsx'

class MessageList extends Component {
  render() {
      return (
        //each message from Message.jsx
        <div id="message-list">
          {this.props.messages.map((msg) => {
            return <Message key={msg.id} content={msg.content} username={msg.username} />
          })}
          <div className="message system">
          </div>
        </div>
    )
  }
}
export default MessageList;
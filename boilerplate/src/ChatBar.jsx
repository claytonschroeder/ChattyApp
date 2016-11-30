import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    return (
      <footer>
        <input
          id="username"
          type="text"
          placeholder="{Your Name (Optional)}"
          //this comes from App.jsx line 11
          value={this.props.currentUser.name}
        />
        <input
          id="new-message"
          type="text"
          placeholder="Type a message and hit ENTER"
        />
      </footer>
    );
  }
}
export default ChatBar;

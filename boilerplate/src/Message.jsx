import React, {Component} from 'react';


class Message extends Component {
  render() {
    let classValue = "message";
    if(this.props.type === "incomingNotification") {
      classValue += " system"
    }
    return (
      <div>
        <div className={classValue}>
          <span className="username">
            {this.props.username}
          </span>
          <span className="content">
            {this.props.content}
          </span>
        </div>
      </div>
    );
  }
}
export default Message;

import React, {Component} from 'react';

class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            content: ""
        };
    this.changeUsername = this.changeUsername.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.submitUsername = this.submitUsername.bind(this);
    }

    changeUsername(event) {
        this.setState({username: event.target.value})
    }

    changeMessage(event) {
        this.setState({content: event.target.value})
    }
//actions up
    submitMessage(event) {
        if (event.which === 13) {
            let message = {
                content: this.state.content,
                username: this.state.username,
                type: "postMessage"
            }
//reset content to empty string after addMessage
            this.props.addMessage(message);
            this.setState({content: ''});
        }
    }
//actions up
    submitUsername(event) {
        let message = {
            content: this.props.username + " changed username to " + this.state.username,
            username: this.state.username,
            type: "postNotification"
        }
    this.props.addMessage(message);
  }

    render() {
        console.log("Rendering CharBar.jsx")
        return (
            <footer>
                <input
                    onChange={this.changeUsername}
                    value={this.state.username}
                    onKeyPress={
                        (evt) => {
                            if (evt.which === 13) {
                                this.submitUsername
                            }
                        }
                    }
                    onBlur={this.submitUsername}
                    id="username"
                    type="text"
                    placeholder="Your Name (Optional)"
                />

                <input
                    onChange={this.changeMessage}
                    value={this.state.content}
                    onKeyPress={this.submitMessage}
                    id="new-message"
                    type="text"
                    placeholder="Type a message and hit ENTER"
                />
            </footer>
        );
    }
}
export default ChatBar;

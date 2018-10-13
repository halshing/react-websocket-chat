import React from "react";
import { receiveMessage } from "../api";

const Message = props => (
  <div>
    <div>{props.message}</div>
  </div>
);

class Chat extends React.Component {
  state = {
    message: "",
    messages: []
  };
  componentWillMount() {
    receiveMessage(msg => {
      this.setState({
        messages: [...this.state.messages, msg]
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
    );
  }
}

export default Chat;

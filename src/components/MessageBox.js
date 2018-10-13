import React from "react";
import { sendMessage } from "../api";

class MessageBox extends React.Component {
  handleOnSubmit = e => {
    e.preventDefault();
    let { messageBox } = this.form;
    sendMessage(messageBox.value);
    this.form.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} ref={form => (this.form = form)}>
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control"
              name="messageBox"
              id="messageBox"
              placeholder="Enter message to chat"
              aria-label="Chat"
            />
            <span className="input-group-btn ml-4">
              <button
                className="btn btn-primary"
                type="submit"
                aria-label="Send"
              >
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageBox;

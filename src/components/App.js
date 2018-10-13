import React from "react";
import MessageBox from "./MessageBox";
import Chat from "./Chat";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="container">
        <MessageBox />
        <Chat />
      </div>
    );
  }
}

export default App;

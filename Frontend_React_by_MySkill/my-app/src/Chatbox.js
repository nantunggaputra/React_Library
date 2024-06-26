import React from "react";
import Message from "./Message";

class Chatbox extends React.Component {
  render() {
    return (
      <div className="chattbox">
        <h3>Conversation</h3>
        <Message sender="User" content="Anyone here?" />
        <Message
          sender="Admin"
          content="Hi, welcome to the chat. You can build this feature using React state."
        />
      </div>
    );
  }
}

export default Chatbox;

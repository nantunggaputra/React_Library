import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <small>{this.props.sender}</small>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Message;

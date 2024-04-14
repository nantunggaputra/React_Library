import React from "react";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      body: "I'm Nantungga Putra",
      subbody: "a Front-End Web Development Enthusiasts",
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.body}</p>
        <p>{this.state.subbody}</p>
      </div>
    );
  }
}

export default Body;

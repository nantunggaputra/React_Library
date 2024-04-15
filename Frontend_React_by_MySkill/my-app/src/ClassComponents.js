import React from "react";

const Text = <u>This text is made in Class Components</u>;
class ClassComponents extends React.Component {
  render() {
    return <p>{Text}</p>;
  }
}

export default ClassComponents;

import React from "react";

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "This is Title",
      subTitle: `It is ${new Date().toLocaleString()}.`,
      buttonClicked: false,
    };
  }
  changeTitle = () => {
    this.setState({
      title: "Let's We React",
      buttonClicked: true,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.changeTitle} disabled={this.state.buttonClicked}>
          Change Title
        </button>
        <h2>{this.state.title}</h2>
        <h3>{this.state.subTitle}</h3>
      </div>
    );
  }
}

export default Title;

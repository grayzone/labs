import React from "react";

export default class Demo1 extends React.Component {
  state = { text: "demo1" };
  handleButtonClick = e => {
    console.log("Click button");
    console.log("this :", this);
    console.log("state:", this.state.text);
    console.log("check 1: ", this.state.text || "test");
    console.log("check 2: ", this.state.text1 || "test");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>TestButton</button>
      </div>
    );
  }
}

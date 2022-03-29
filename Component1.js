import React from "react";

class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "vikram" };
  }

  clickChange = () => {
    this.setState({ name: this.state.name.toUpperCase() });
  };
  render() {
    return (
      <div>
        <button onClick={this.clickChange}>Click</button>
        <h2>Hello World</h2>
      </div>
    );
  }
}

export default Component1;

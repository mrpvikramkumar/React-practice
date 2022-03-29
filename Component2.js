import React from "react";

class Component2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Component2</h2>
        <button onClick={this.props.updateFunction}>Click</button>
      </div>
    );
  }
}

export default Component2;

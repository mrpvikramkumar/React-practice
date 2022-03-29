import React from "react";

class CompC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vikram",
    };
  }

  handleClick = () => {
    this.setState({ name: this.state.name.toUpperCase() });
    this.state.name = this.state.name.toUpperCase();
    console.log("In CompC", this.state.name);
  };
  render() {
    console.log("In CompC", this.props);
    return (
      <div>
        <button onClick={this.handleClick}>Click2</button>
        <h2> In CompC {this.state.name}</h2>
      </div>
    );
  }
}

export default CompC;

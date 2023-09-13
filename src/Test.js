import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({
      count: (prevCount) => prevCount + 1,
    });
  }
  render() {
    console.log("test");
    return <div onClick={this.clickMe}>This is a test component!</div>;
  }
}

export default Test;

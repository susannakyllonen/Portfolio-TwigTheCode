import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    }
  }

  render() {
    return (
      <h1 className="mainTitle">
        Hello, I'm {this.props.name}
      </h1>
    );
  }
}

export default Hello;

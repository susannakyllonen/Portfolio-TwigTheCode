import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      names : []
    }
  }
  handleClick(event){
    const names = this.state.names.concat("apua")
    this.setState({
      names
    })
    console.log("apua")
  }
  render() {
    return (
      <div className="App">
        tekstiä tekstiä
      </div>
    );
  }
}

export default Portfolio;

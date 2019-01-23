import React, { Component } from 'react';
import Introduction from './components/Introduction'

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      names : []
    }
  }
  
  render() {
    const name = this.props.match.params.name
    console.log("apua",name) 
    return (
      <div className="App">
        <Introduction name={name}></Introduction>
      </div>
    );
  }
}

export default Portfolio;

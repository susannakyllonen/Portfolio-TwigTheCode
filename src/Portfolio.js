import React, { Component } from 'react';
import Main from './components/main'

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
        <Main name={name}></Main>
      </div>
    );
  }
}

export default Portfolio;

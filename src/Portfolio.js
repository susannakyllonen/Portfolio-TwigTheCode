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
    return (
      <div className="App">
        tekstiä tekstiä
        <Introduction></Introduction>
      </div>
    );
  }
}

export default Portfolio;

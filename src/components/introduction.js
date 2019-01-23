import React, { Component } from 'react';

class Introduction extends Component {
  constructor(props){
    super(props);
    this.state = {
      names : []
    }
  }
  
  render() {
    return (
      <summary>
          I can do it all!
      </summary>
    );
  }
}

export default Introduction;

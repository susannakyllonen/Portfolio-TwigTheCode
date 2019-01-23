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
      <main>
          I can do it all!
      </main>
    );
  }
}

export default Introduction;

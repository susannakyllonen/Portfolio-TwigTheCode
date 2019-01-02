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
      <div>
        <header>
          <h1>Portfolio</h1>
        </header>
       
        <content>
          <p>Hello my name is</p>
        </content>
        <footer>
          <a href="https://facebook.com"><i class="fab fa-facebook-square"></i></a>
        </footer>
       </div>
    );
  }
}

export default Introduction;

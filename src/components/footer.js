import React, { Component } from 'react';

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      names : []
    }
  }
  
  render() {
    return (
      <footer>
       <a href="https://facebook.com"><i class="fab fa-facebook-square"></i></a>
       </footer>
    );
  }
}

export default Footer;

import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      names : []
    }
  }
  
  render() {
    return (
      <nav className="navigation__list">
      <a href="#introduction">about</a>
      <a href="#projects">projects</a>
      <a>blog</a>
      </nav>
    );
  }
}

export default Navigation;

import React, { Component } from 'react';
import Header from './header'
import Content from './content'
import Footer from './footer'

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
        <Header/>
        <Content/>
        <Footer/>
       </div>
    );
  }
}

export default Introduction;

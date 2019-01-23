import React, { Component } from 'react';
import Header from './header'
import Content from './content'
import Footer from './footer'
import Hello from './hello'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      names : []
    }
  }
  
  render() {
    return (
      <div>
        <Hello name={this.props.name}/>
        <Content/>
        <Header/>
        <Footer/>
       </div>
    );
  }
}

export default Main;

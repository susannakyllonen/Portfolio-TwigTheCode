import React, { Component } from 'react';
import Header from './header'
import Content from './content'
import Footer from './footer'
import Hello from './hello'
import Introduction from './introduction'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      names : []
    }
  }
  
  render() {
    return (
      <div className={this.props.className}>
        <Hello name={this.props.name}/>
        <Introduction/>
        <Content/>
        <Header/>
        <Footer/>
       </div>
    );
  }
}

export default Main;

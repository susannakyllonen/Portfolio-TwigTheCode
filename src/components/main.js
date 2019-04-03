import React, { Component } from 'react';
import Navigation from './navigation'
import Content from './projects'
import Footer from './footer'
import Hello from './hello'
import Introduction from './introduction'
import Contact from './contact'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <Hello name={this.props.name} />
        <Introduction />
        <Content />
        <Navigation />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;

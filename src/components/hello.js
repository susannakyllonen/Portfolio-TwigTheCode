import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    }
  }

  render() {
    return (
      <section className="helloSection">
        <h1 className="mainTitle">
          Twig the code
      </h1>
        <a href="#introduction" className="button">See more</a>
      </section>


    );
  }
}

export default Hello;

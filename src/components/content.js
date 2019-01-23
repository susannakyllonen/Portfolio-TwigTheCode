import React, { Component } from 'react';

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      names : []
    }
  }
  
  render() {
    return (
      <section>
          <article>Näyte 1</article>
          <article>Näyte 2</article>
      </section>
    );
  }
}

export default Content;

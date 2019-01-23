import React, { Component } from 'react';
import Main from './components/main'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      names : []
    }
  }
  handleClick(event){
    const names = this.state.names.concat("apua")
    this.setState({
      names
    })
    console.log("apua")
  }
  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;

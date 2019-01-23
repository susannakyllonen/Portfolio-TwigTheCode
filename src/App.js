import React, { Component } from 'react';
import Introduction from './components/Introduction'

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
        <Introduction/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {connect} from 'react-redux'
import Header from "./Header"
import WhoWeAre from "./WhoWeAre"
import * as actionCreators from '../actions/actionCreators'
import { bindActionCreators } from 'redux';

class Index extends Component {
    componentWillMount(){
        this.props.getListOfTwiggers()
    }
 
  render() {
    return (
       <main className="front-page">
      <Header/>
      <WhoWeAre/>
      </main>
      
      
    );
  }
}

const mapStateToProps = state => ({
    twiggers: state.twiggers
})

const mapdispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch)
}
const Connected = connect(mapStateToProps, mapdispatchToProps)(Index)


export default Connected;

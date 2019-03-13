import React, { Component } from 'react';
import { bindActionCreators, dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators'

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    }
  }

  render() {
    return (
      <summary className="introductionContainer">
        <i className="section__icon fas fa-crown"></i>
        <h2 className="section__title">{this.props.introduction.title}</h2>
        <p>{this.props.introduction.text}</p>
      </summary>
    );
  }
}

export const mapStateToProps = state => ({
  introduction: state.introduction,
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(Introduction);


export default Connected;

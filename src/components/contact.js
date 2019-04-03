import React, { Component } from 'react';
import { bindActionCreators, dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    }
  }

  render() {
    return (
      <div>
        <i class="fab fa-fort-awesome"></i>
        <h2 className="section__title">{this.props.contact.title}</h2>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  contact: state.contact,
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(Contact);


export default Connected;


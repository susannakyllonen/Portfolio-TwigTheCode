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
    const email = "mailto:" + this.props.contact.email
    return (
      <section className="contactSection">
        <i className="fab fa-fort-awesome section__icon"></i>
        <h2 className="section__title">{this.props.contact.title}</h2>
        <p>{this.props.contact.text}</p>
        <a href={email} className="button">Contact</a>
      </section>
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


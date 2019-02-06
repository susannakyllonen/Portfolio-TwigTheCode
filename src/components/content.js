import React, { Component } from 'react';
import {bindActionCreators, dispatch} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators'

class Content extends Component {
  
  render() {
    console.log (this.props.projects)
    return (
      <section>
           {
             this.props.projects.map(project => <article>{project.title}</article>)
          }
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  projects: state.projects,
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(Content);

export default Connected;

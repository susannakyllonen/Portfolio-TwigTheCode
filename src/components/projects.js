import React, { Component } from 'react';
import {bindActionCreators, dispatch} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators'

class Projects extends Component {
  
  render() {
    console.log (this.props.projects)
    return (
      <section className = "projects">
           {
             // TODO: create react component Project. :D
             this.props.projects.map(project => <article className = "projects__article project"><div className = "project__title">{project.title}</div><div>{project.description}</div></article>)
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

const Connected = connect(mapStateToProps, mapDispatchToProps)(Projects);

export default Connected;

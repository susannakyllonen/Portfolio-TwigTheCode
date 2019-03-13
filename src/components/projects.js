import React, { Component } from 'react';
import {bindActionCreators, dispatch} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators'

class Projects extends Component {
  

  render() {
    console.log (this.props.projects)
    return (
      <section>
        <i className="section__icon far fa-gem"></i>
        <h2 className="section__title">Projects</h2>
        <div className="underline"></div>
        <div className = "projects">
          {this.props.projects.map(project => <article className = "projects__article project">
          <div><h3 className = "project__title">{project.title}</h3></div>
          <div>{project.description}</div>
          </article>)}
        </div>
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

import React, { Component } from 'react';
import { bindActionCreators, dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators'

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      names : []
    }
  }
  
  isLinkDefined = (link, icon) => {
    if(link != ""){
      return <a href={link} target="_blank"><i class={icon}></i></a>
    }
  }

  render() {
    return (
      <footer>
       {this.isLinkDefined(this.props.footer.facebook, "fab fa-facebook-f")}
       {this.isLinkDefined(this.props.footer.instagram, "fab fa-instagram")}
       {this.isLinkDefined(this.props.footer.linkedin, "fab fa-linkedin-in")}
       {this.isLinkDefined(this.props.footer.twitter, "fab fa-twitter")}
       {this.isLinkDefined(this.props.footer.github, "fab fa-github")}
       </footer>
    );
  }
}

export const mapStateToProps = state => ({
  footer: state.footer,
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(Footer);


export default Connected;


import React, { Component } from 'react';
import require from 'superagent';
import firebase from '../../../firebase.config.js';
import { Link } from 'react-router';
import SignUp from './SignUp.jsx';
import FormForComments from '../Comments/FormForComments.jsx';

const propTypes = {
  children: React.PropTypes.element,
}

class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      showHide: 'show',
    }
    this.signOut = this.signOut.bind(this);
  }
  componentWillMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loggedIn: (user !== null),
        })
      })
    }, 200);
  }
  signOut() {
    firebase.auth()
    .signOut()
    .then(() => {
      console.log('user is signed out')
    })
  }
  loggedInLinks() {
      return (
        <div id="sign-out">
        </div>
      )
  }
  render() {
    return (
      <div>
        <div id="main-nav">
          <h1>MAIN COMPONENT</h1>
          {this.state.loggedIn ?  <FormForComments showHide={this.props.showHide} /> : <SignUp /> }
          <h2 id="close"><Link to="/">CLOSE</Link></h2>

        </div>
        <div id="main-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Main.propTypes = propTypes;

export default Main;

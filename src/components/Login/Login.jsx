import React, { Component } from 'react';
import firebase from '../../../firebase.config.js';
import { withRouter } from 'react-router';
import FormForComments from '../Comments/FormForComments.jsx';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey]  = e.target.value;
    this.setState(stateObj);
  }
  handleSubmit(e) {
    const { username, password } = this.state;
    firebase.auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        alert(err);
      })
      .then(() => {
        if (this.state.showHide == 'hide') {
          this.setState({
            showHide: 'show'
          });
        } else {
          this.setState({
            showHide: 'hide'
          });
        }
      });
  }
  render() {
    return (
      <div>
        <div id="login-form" className={this.state.showHide}>
          <h2>Please login to your account to leave a comment.</h2>
          <div>
            <input name="username" onChange={this.handleChange} type="text" placeholder="username" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
          <div className="clear"></div>
          <input type="submit" value="Login" onClick={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default withRouter(Login);

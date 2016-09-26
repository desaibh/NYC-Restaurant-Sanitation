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
          <h1>Welcome to the <mark>LOGIN</mark> component, this component is <mark><b>NOT</b></mark> protected</h1>
          <div>
            <input name="username" onChange={this.handleChange} type="text" placeholder="username" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
          <button className="btn" onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);

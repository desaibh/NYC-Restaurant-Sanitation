import React, { Component } from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';
import { Link } from 'react-router';


class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      register: false,
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.registerHandler = this.registerHandler.bind(this);
  }
  loginHandler() {
    this.setState({
      login: true,
      register: false,
    });
  }
  registerHandler() {
    this.setState({
      register: true,
      login: false
    });
  }
  render() {
    return (
      <div>
        <h1>Login or Register to Leave a Comment</h1>
        <button onClick={this.loginHandler}>LOGIN</button>
        <button onClick={this.registerHandler}>REGISTER</button>
        {this.state.login ? <Login /> : false }
        {this.state.register ? <Register /> : false }
      </div>
    );
  }
}

export default SignUp;

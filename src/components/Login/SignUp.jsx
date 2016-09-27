import React, { Component } from 'react';
import { Link } from 'react-router';

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Login or Register to Leave a Comment</h1>
        <button><Link to="signIn/login">LOGIN</Link></button>
        <button><Link to="signIn/register">REGISTER</Link></button>
      </div>
    );
  }
}

export default SignUp;

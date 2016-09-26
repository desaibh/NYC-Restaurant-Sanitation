import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import Main from '../components/Login/Main.jsx';
import CommentsWindowModal from '../components/Comments/CommentsWindowModal.jsx';
import Register from '../components/Login/Register.jsx';
import Login from '../components/Login/Login.jsx';
import SignUp from '../components/Login/SignUp.jsx';
import FormForComments from '../components/Comments/FormForComments.jsx';
import requireAuth from '../utils/auth.js';

const Routes = () => {
  return (
    <Router history = {hashHistory}>
      <Route path = "/" component={App} />
      <Route path = "/home" component={App} />
      <Route path = "signIn/" component={Main}>
        <Route path="signUp" component={SignUp} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
        <Route path="comments" component={FormForComments} onEnter={requireAuth} />
      </Route>
    </Router>
  );
}

export default Routes;

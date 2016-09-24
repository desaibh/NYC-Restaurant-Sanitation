import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Login/Main.jsx';
import Register from '../components/Login/Register.jsx';
import Login from '../components/Login.jsx';
import Comments from '../components/Comments/Comments.jsx';
import FormForComments from '../components/Comments/FormForComments.jsx';
import requireAuth from '../utils/auth.js';

const Routes = () => {
  return (
    <Router history = {hashHistory}>
      <Route path = "/" component={Main}>
        <IndexRoute component={Comments} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
        <Route path="comments" component={FormForComments} onEnter={requireAuth} />
      </Route>
    </Router>
  );
}

export default Routes;


const React = require('react'),
      firebase = require('../../firebase.config.js');

function requireAuth(nextState, replace) {
  if (firebase.auth().currentUser === null) {
    replace({
      pathname: '/login',
      state: {nextPathname: nextState.location.pathname },
    });
  }
}

module.exports = requireAuth;

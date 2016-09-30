import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../../firebase.config.js';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      showHide: 'show',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  handleSubmit(e) {
    const { username, password } = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(username, password)
      .catch((err) => {
        console.log(err);
      })
      .then((user) => {
        firebase.database().ref('users')
        .child(user.uid)
        .set({ first_name: '', last_name: '', email: username });
      })
      .then(() => {
        if (this.state.showHide == 'hide') {
          this.setState({
            showHide: 'show',
          });
        } else {
          this.setState({
            showHide: 'hide',
          });
        }
      });
  }
  render() {
    return (
      <div className={this.state.showHide}>
        <div id="register-form">
          <h1>Please register a new account to leave a comment.</h1>
          <div>
            <input
              name="username"
              onChange={this.handleChange}
              type="text"
              placeholder="username"
            />
          </div>
          <div>
            <input
              name="password"
              onChange={this.handleChange}
              type="password"
              placeholder="password"
            />
          </div>
          <div className="clear"></div>
          <input type="submit" value="Register" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default withRouter(Register);

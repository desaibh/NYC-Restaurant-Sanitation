import React, {Component} from 'react';
import request from 'superagent';
import ViolationsRequest from './ViolationsRequest.jsx';

class ViolationsApp extends Component {
  constructor() {
    super();
    this.state  = {
      restaurant: '',
      submit: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submit: true });

  }
  handleChange(e) {
    const data = (e.target.value).toUpperCase();
    this.setState({ restaurant: data });
  }
  render() {
    return (
        <div>
          <form  onSubmit={this.handleSubmit}>
            <input value={this.state.restaurant} onChange={this.handleChange} />
            <input type="submit" />
          </form>
          <ViolationsRequest restaurant={this.state.restaurant} submit={this.state.submit} />
       </div>
    )
  }
}

export default ViolationsApp;

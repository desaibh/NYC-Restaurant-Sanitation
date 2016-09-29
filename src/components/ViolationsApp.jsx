import React, { Component } from 'react';
import ViolationsRequest from './ViolationsRequest.jsx';

class ViolationsApp extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: '',
      submit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.restaurant !== '') {
      this.setState({ submitted: true });
    }
  }
  handleChange(e) {
    const data = (e.target.value).toUpperCase();
    this.setState({ restaurant: data });
  }
  render() {
    return (
      <div id="restaurant-input">
        <header>
          <h1>NYC Restaurant Health Grades </h1>
        </header>
        <div id="container">
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.restaurant}
              onChange={this.handleChange}
              placeholder="Restaurant lookup"
              type="text"
            />
            <input type="submit"  />
          </form>
          <ViolationsRequest restaurant={this.state.restaurant} submitted={this.state.submitted} />
        </div>
        <footer>
          <p>This website brings you information about New York City restaurant&nbsp;
          grades and sanitation by parsing through the&nbsp;
          inspection Data found on the NYC Department of Health &amp;&nbsp;
          Mental Hygiene's open-source platform,&nbsp;
          <a href="https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results/xx67-kt59/data" target="_blank">
          Open Data</a>.</p>

          <p>The icons were created by&nbsp;
            <a href="http://www.freepik.com" title="Freepik">Freepik</a> from&nbsp;
            <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>&nbsp;
              is licensed by&nbsp;
                <a href="http://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.</p>
        </footer>
      </div>
   );
  }
}

export default ViolationsApp;

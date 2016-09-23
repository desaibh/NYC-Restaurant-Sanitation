import React, { Component } from 'react';
import Comments from './Comments/Comments.jsx'

class ViolationsView extends Component {
  render() {
    return (
      <div className="door">
        <h3>{this.props.restaurant}</h3>
        <p>Address: <br />
        {this.props.building}&nbsp;
        {this.props.street},&nbsp;
        {this.props.zip}     <br />
        Telephone: {this.props.phone} </p>
        <p>Cuisine: <br />
        {this.props.cuisine} </p>
        <p>Inspection Information <br />
        Grade: {this.props.grade}<br />
        Grade Date: {this.props.gradeDate}<br />
        Inspection Type: {this.props.inspectionType}<br />
        Date of Inspection: {this.props.inspectionDate} <br />
        Action: {this.props.action} <br />
        Violation: {this.props.violationCode} &mdash; {this.props.violationDescription}<br />
        Critical Flag: {this.props.criticalFlag}<br />
        Score: {this.props.score}
        </p>
        <Comments />
      </div>
    );
  }
}

export default ViolationsView;

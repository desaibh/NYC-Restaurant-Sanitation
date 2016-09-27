import React, { Component } from 'react';
import Comments from './Comments/Comments.jsx';

const propTypes = {
  restaurant: React.PropTypes.string,
  building: React.PropTypes.string,
  street: React.PropTypes.string,
  zip: React.PropTypes.string,
  phone: React.PropTypes.string,
  cuisine: React.PropTypes.string,
  grade: React.PropTypes.string,
  gradeDate: React.PropTypes.string,
  inspectionType: React.PropTypes.string,
  inspectionDate: React.PropTypes.string,
  action: React.PropTypes.string,
  violationCode: React.PropTypes.string,
  violationDescription: React.PropTypes.string,
  score: React.PropTypes.number,
  criticalFlag: React.PropTypes.string,
};
class ViolationsView extends Component {
  render() {
    return (
      <div className="door">
        <h3>{this.props.restaurant}</h3>
        <p>Address: <br />
          {this.props.building}&nbsp;
          {this.props.street},&nbsp;
          {this.props.zip} <br />
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
          Critical Flag: {this.props.criticalFlag} <br />
          Score: {this.props.score}
        </p>
        <Comments />
      </div>
    );
  }
}

ViolationsView.propTypes = propTypes;

export default ViolationsView;

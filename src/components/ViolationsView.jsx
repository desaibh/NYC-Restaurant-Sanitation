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
  score: React.PropTypes.string,
  criticalFlag: React.PropTypes.string,
};
class ViolationsView extends Component {
  render() {
    return (
      <div className="door">
        <h3>{this.props.restaurant}</h3>
        <div className="leftdiv">
          <p><strong>Address:</strong> <br />
            {this.props.building}&nbsp;
            {this.props.street},&nbsp;
            {this.props.zip} <br />
            <strong>Telephone:</strong> {this.props.phone} </p>
          <p><strong>Cuisine:</strong><br />
            {this.props.cuisine} </p>
          <p><strong>Inspection Information:</strong><br />
            <strong>Grade:</strong> {this.props.grade}<br />
            <strong>Grade Date:</strong> {this.props.gradeDate}<br />
            <strong>Inspection Type:</strong> {this.props.inspectionType}</p>
        </div>
        <div className="rightdiv">
          <p><strong>{this.props.action}</strong> <br />
            {this.props.violationDescription}</p>
          <p><strong>Violation:</strong> {this.props.violationCode}</p>
          <p><strong>Critical Flag:</strong> {this.props.criticalFlag} <br />
            <strong>Score:</strong> {this.props.score}
          </p>
        </div>

        <Comments />
      </div>
    );
  }
}

ViolationsView.propTypes = propTypes;

export default ViolationsView;

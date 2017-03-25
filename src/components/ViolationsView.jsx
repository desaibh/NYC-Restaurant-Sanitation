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
  constructor() {
    super();
    this.state = {
      phone: '',
      gradeDate: '',
    };
  }
  componentDidMount() {
    this.formatPhone(this.props.phone);
    this.formatGradeDate(this.props.gradeDate);

  }
  formatPhone(phone) {
    let tempPhone = `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6,11)}`;
    this.setState({
      phone: tempPhone,
    });
  }
  formatGradeDate(gradeDate) {
    let tempGradeDate = `${gradeDate.slice(0,10)}`;
    this.setState({
      gradeDate: tempGradeDate,
    });
  }
  render() {
    return (
      <div className="door">
        <h3>{this.props.restaurant}</h3>
        <div className="leftdiv">
          <p><strong>Address:</strong> <br />
            {this.props.building}&nbsp;
            {this.props.street},&nbsp;
            {this.props.zip} <br />
            {this.phoneView}
            <strong>Telephone:</strong> {this.state.phone} </p>
          <p><strong>Cuisine:</strong><br />
            {this.props.cuisine} </p>
          <p><strong>Inspection Information:</strong></p>
          <div className="clear"></div>
          <p><strong>Grade Date:</strong> {this.state.gradeDate}<br />
            <strong>Inspection Type:</strong> {this.props.inspectionType}</p>
          <div className="clear"></div>
          <p><strong>{this.props.action}</strong> <br />
            {this.props.violationDescription}</p>
          <div className="clear"></div>
            <p><strong>Score:</strong> {this.props.score}</p>
        </div>
        <div className="rightdiv">
          <div className="circular" >
            <p><strong>Grade:</strong><br /> {this.props.grade}</p>
          </div>
          <div className="circular">
            <p><strong>Code</strong><br />
            {this.props.violationCode}</p>
          </div>
          <div className="circular">
            <p><strong>Flag:</strong> <br />
            {this.props.criticalFlag} </p>
          </div>
          <div className="clear"></div>
        </div>
        <Comments restaurant={this.props.restaurant} />
      </div>
    );
  }
}

ViolationsView.propTypes = propTypes;

export default ViolationsView;

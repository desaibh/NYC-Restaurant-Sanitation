import React, { Component } from 'react';
import request from 'superagent';
import ViolationsView from './ViolationsView.jsx';
import PostComments from './Comments/PostComments.jsx';
import firebase from '../../firebase.config.js';

const propTypes = {
  restaurant: React.PropTypes.string,
  submitted: React.PropTypes.boolean,
};

class ViolationsRequest extends Component {
  constructor() {
    super();
    this.state = {
      doors: [],
      valueFound: false,
      restaurant: '',
      location: '',
    };
  }
  componentDidMount() {
    this.getDOHMHData();
  }
  getDOHMHData() {
    let restaurantData = {};
    let dbref = firebase.database().ref().child('data');
    dbref.once('value', snap => {
      restaurantData = snap.val();
      const cleanData = restaurantData.map((inspectionData) => {
          const [sid, id, position, createdAt, createdMeta,
          updatedAt, updatedMeta, meta, camis, dba,
          boro, building, street, zipcode, phone,
          cuisine, inspectionDate, action, violationCode, violationDescription,
          criticalFlag, score, grade, gradeDate, recordDate,
          inspectionType] = inspectionData;
          return {
            restaurant: dba,
            building,
            street,
            zip: zipcode,
            phone: phone,
            cuisine,
            inspectionDate,
            action,
            violationCode,
            violationDescription,
            criticalFlag,
            score,
            grade,
            gradeDate,
            inspectionType,
          };
        });
        this.setState({
          doors: cleanData,
        });
    });
  }
  render() {
    const violationElements = this.state.doors.map((door, idx) => {
      if (this.props.submitted == true &&
        door.restaurant !== null &&
        door.restaurant !== undefined &&
        door.restaurant.indexOf(this.props.restaurant) !== -1) {
        this.state.valueFound = true;
        this.state.restaurant = door.restaurant;
        this.state.location = door.location;
        return (
          <ViolationsView
            key={idx}
            restaurant={door.restaurant}
            building={door.building}
            street={door.street}
            zip={door.zip}
            phone={door.phone}
            cuisine={door.cuisine}
            inspectionDate={door.inspectionDate}
            action={door.action}
            violationCode={door.violationCode}
            violationDescription={door.violationDescription}
            criticalFlag={door.criticalFlag}
            score={door.score}
            grade={door.grade}
            gradeDate={door.gradeDate}
            inspectionType={door.inspectionType}
          />
        );
      }
    });
    <PostComments
      restaurant={this.state.restaurant}
      location={this.state.location}
    />
    if (this.state.valueFound === false && this.props.submit === true) {
      return (
        <div>
          <h1> No results found.</h1>

        </div>
      );
    }
    return (
      <div>
        {violationElements}
      </div>
    )
  }
}

ViolationsRequest.propTypes = propTypes;

export default ViolationsRequest;

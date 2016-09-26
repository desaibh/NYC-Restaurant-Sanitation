import React, {Component} from 'react';
import request from 'superagent';
import ViolationsView from './ViolationsView.jsx';
import PostComments from './Comments/PostComments.jsx';

const propTypes = {
  restaurant: React.PropTypes.string,
  submit: React.PropTypes.boolean,
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
    this.setState({
      valueFound: false,
    })
  }
  getDOHMHData() {
    request.get('/data/healthgrades.json').then((response) => {
      const restaurantData = response.body;
      const cleanData = restaurantData.data.map((inspectionData) => {
        const [sid, id, position, createdAt, createdMeta,
          updatedAt, updatedMeta, meta, camis, dba, boro,
          building, street, zipcode, phone, cuisine,
          inspectionDate, action, violationCode,
          violationDescription, criticalFlag, score, grade,
          gradeDate, recordDate, inspectionType] = inspectionData;
        return {
          sid: sid,
          restaurant: dba,
          building: building,
          street: street,
          zip: zipcode,
          phone: phone,
          cuisine: cuisine,
          inspectionDate: inspectionDate,
          action: action,
          violationCode: violationCode,
          violationDescription: violationDescription,
          criticalFlag: criticalFlag,
          score: score,
          grade: grade,
          gradeDate: gradeDate,
          inspectionType: inspectionType,
        };
      });
      this.setState({
        doors: cleanData,
      });
    });
  }
  render() {
    const violationElements = this.state.doors.map((door, idx) => {
    if (this.props.submit == true &&
        door.restaurant !== null &&
        door.restaurant.length >= 3 &&
        door.restaurant.indexOf(this.props.restaurant) !== -1) {
      this.state.valueFound = true;
      this.state.restaurant = door.restaurant;
      this.state.location = door.location;
      return (
        <ViolationsView key={idx}
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
        )
      }
    });
    <PostComments restaurant = {this.state.restaurant} location = {this.state.location} />
    if (this.state.valueFound == false && this.props.submit == true) {
      return (
        <div>
          <h1> No results found.</h1>
        </div>
      )
    };
    return (
      <div>
        {violationElements}
      </div>
    )
  }
}

ViolationsView.propTypes = propTypes;

export default ViolationsRequest;

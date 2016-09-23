import React, {Component} from 'react';
import request from 'superagent';
import ViolationsView from './ViolationsView.jsx';

class ViolationsRequest extends Component {
  constructor() {
    super();
    this.state = { doors: [] };
  }
  componentDidMount() {
    this.getDOHMHData();
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
          door.restaurant.indexOf(this.props.restaurant) !== -1) {
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
    return (
      <div>
        {violationElements}
      </div>
    )
  }
}

export default ViolationsRequest;

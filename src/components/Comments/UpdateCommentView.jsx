import React from 'react';
import { Link, withRouter } from 'react-router';
import App from '../App.jsx'

const propTypes = {
  restaurant: React.PropTypes.number,
  location: React.PropTypes.string,
  rating: React.PropTypes.number,
  comments: React.PropTypes.string,
}

class UpdateCommentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localRestaurant: this.props.restaurant || '',
      localLocation: this.props.location || '',
      localRating: this.props.rating || '',
      localComment: this.props.comment || '',
      save: false,
      saveRestaurant: false,
      saveLocation: false,
      saveRating: false,
      saveComment: false,
    };
    this.handleEditOfRestaurant = this.handleEditOfRestaurant.bind(this);
    this.handleEditOfLocation = this.handleEditOfLocation.bind(this);
    this.handleEditOfRating = this.handleEditOfRating.bind(this);
    this.handleEditOfComment = this.handleEditOfComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.isSaved = this.isSaved.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localRestaurant: nextProps.restaurant || '',
      localLocation: nextProps.location || '',
      localRating: nextProps.rating || '',
      localComment: nextProps.comment || '',
    });
  }
  handleEditOfRestaurant(e) {
    const newRestaurant = e.target.value;
    this.setState({
      localRestaurant: newRestaurant,
    });
  }
  handleEditOfLocation(e) {
    const newLocation = e.target.value;
    this.setState({
      localLocation: newLocation,
    });
  }
  handleEditOfRating(e) {
    const newRating = e.target.value;
    this.setState({
      localRating: newRating,
    });
  }
  handleEditOfComment(e) {
    const newComment = e.target.value;
    this.setState({
      localComment: newComment,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      restaurant: this.state.localRestaurant,
      location: this.state.localLocation,
      comment: this.state.localComment,
      rating: this.state.localRating
    });
    this.setState({ save: 'true' })
  }
  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }
  isSaved() {
    return this.props.restaurant === this.state.localRestaurant &&
          this.props.location === this.state.localLocation &&
          this.props.rating === this.state.localRating &&
          this.props.comment === this.state.localComment;
  }
  render() {
    return (
      <div className={this.isSaved() ? 'saved' : 'not-saved'} >
        <h2>Update your Comments Below</h2>
        <form className="post-display" >
          <input
            type="text"
            name="Restaurant"
            placeholder = "Restaurant"
            value={this.state.localRestaurant}
            onChange={this.handleEditOfRestaurant}
          />
          <input
            type="text"
            name="Location"
            placeholder = "Restaurant Location"
            value={this.state.localLocation}
            onChange={this.handleEditOfLocation}
          />
          <div className="clear"></div>
          <input
              type="number"
              name="Rating"
              min="0"
              max="10"
              placeholder = "Restaurant Rating (1-10 scale)"
              value={this.state.localRating}
              onChange={this.handleEditOfRating}
            />
            <div className="clear"></div>
            <input
              type="text"
              name="Comment"
              placeholder = "Tell Us About Your Experience"
              value={this.state.localComment}
              onChange={this.handleEditOfComment}
            />
            <div className="clear"></div>
            <input
              onSubmit={this.handleDelete}
              type="submit"
              value="DELETE"
              className="hidden"
            />
            <input
              onSubmit={this.handleSubmit}
              type="submit"
              value="UPDATE"
              className="hidden"
            />
        </form>
        {this.state.save ? <Link to="/home" /> : false}
      </div>
    );
  }
}

export default withRouter(UpdateCommentView);

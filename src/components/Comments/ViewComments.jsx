import React from 'react';
import { Link, withRouter } from 'react-router';

const propTypes = {
  post: React.PropTypes.array,
};

class ViewComments extends React.Component {
  render() {
    const url = 'https://restaurant-react.firebaseio.com/posts.json';
    request.get(url)
           .then((response) => {
             const postsData = response.body;
             let posts = [];
    if (postsData) { posts = Object.keys(postsData).map((id) => {
    const postElements = this.props.posts.map((post, idx) => {  // for each of the posts... give an li
      if (this.props.restaurant == this.post.restaurant) {
        return (
          <div key={idx}>
            <h2>Comments</h2>
            <p>{this.props.restaurant}</p>
            <p>{this.props.location}</p>
            <p>{this.props.rating}</p>
            <p>{this.props.comment}</p>
          </div>
        )
      }
    });
  });
};

export default withRouter(ViewComments);

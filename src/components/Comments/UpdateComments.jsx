import React from 'react';
import firebase from '../../../firebase.config.js';
import UpdateCommentView from './UpdateCommentView.jsx';

const propTypes = {
  posts: React.PropTypes.array.isRequired,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
};

class UpdateComments extends React.Component {
  render() {
    const userData = firebase.auth().currentUser.uid;
    const postElements = this.props.posts.map((post, idx) => {
      if (userData === post.userID) {
        return (
          <div key={idx}>
            <UpdateCommentView
              handleDelete={this.props.handleDelete}
              handlePublish={this.props.handlePublish}
              id={post.id}
              restaurant={post.restaurant}
              location={post.location}
              comment={post.comment}
              rating={post.rating}
            />
          </div>
        );
      }
    });

    return (
      <div>
        {postElements}
      </div>
    );

  }
}

UpdateComments.propTypes = propTypes;

export default UpdateComments;

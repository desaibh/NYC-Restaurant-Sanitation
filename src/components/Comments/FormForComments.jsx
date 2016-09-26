import React, { Component } from 'react';
import request from 'superagent';
import firebase from '../../../firebase.config.js';
import { withRouter } from 'react-router';
import App from '../App.jsx';
import PostComments from './PostComments.jsx'
import UpdateComments from './UpdateComments.jsx'
import UpdateCommentView from './UpdateCommentView.jsx'

class FormForComments extends Component {
  constructor() {
    super();
    this.state = {
      signedOut: false,
      posts: [],
      updateComment: false,
      newComment: false,
    }
    this.signOut = this.signOut.bind(this);
    this.updateRequest = this.updateRequest.bind(this);
    this.newRequest = this.newRequest.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.httpUpdatePost = this.httpUpdatePost.bind(this);
    this.httpPublishPost = this.httpPublishPost.bind(this);
    this.httpDeletePost = this.httpDeletePost.bind(this);
  }
  componentDidMount() {  // Only happens once.. on first load
    this.httpGetPosts();
  }
  httpGetPosts() {
    const url = 'https://restaurant-react.firebaseio.com/posts.json';
    request.get(url)
           .then((response) => {
             const postsData = response.body;
             let posts = [];
             if (postsData) {
               posts = Object.keys(postsData).map((id) => {
                 const individualPostData = postsData[id];
                 return {
                   id,
                   userID: individualPostData.userID,
                   comment: individualPostData.comment,
                   restaurant: individualPostData.restaurant,
                   location: individualPostData.location,
                   rating: individualPostData.rating,
                 };
               });
             }
             this.setState({ posts });
           });
  }
  handlePublish({ id, restaurant, location, comment, rating }) {
    if (id) {
      this.httpUpdatePost({ id, restaurant, location, comment, rating });
    } else {
      this.httpPublishPost({ restaurant, location, comment, rating });
    }
  }
  httpDeletePost(id) {
    const url = `https://restaurant-react.firebaseio.com/posts/${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpUpdatePost({ id, restaurant, location, comment, rating }) {
    const url = `https://restaurant-react.firebaseio.com/posts/${id}.json`;
    request.patch(url)
           .send({ restaurant, location, comment, rating })
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpPublishPost({ restaurant, location, comment, rating }) {
    const url = 'https://restaurant-react.firebaseio.com/posts.json';
    const userID = firebase.auth().currentUser.uid;
    request.post(url)
           .send({ userID, restaurant, location, comment, rating })
           .then(() => {
             this.httpGetPosts();
           });
  }
  signOut() {
    firebase.auth()
    .signOut()
    .then(() => {
      console.log('user is signed out')
      this.setState ({
        signedOut: true,
      })
    })
  }
  updateRequest() {
    this.setState ({
      updateComment: true,
    });
  }
  newRequest() {
    this.setState ({
      newComment: true,
    });
  }
  render() {
    return (
      <div>
      <button onClick={this.newRequest}>New Comments</button>
      <button onClick={this.updateRequest}>Update Comments</button>
      <button onClick={this.signOut}>Sign Out</button>
      {this.state.signedOut ? <App /> : false }
      {this.state.newComment ? <PostComments  handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} posts={this.state.posts} /> : false }
      {this.state.updateComment ? <UpdateComments  handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} posts={this.state.posts} /> : false }
      <PostComments handlePublish={this.handlePublish} />
      </div>
    )
  }
}

export default FormForComments;

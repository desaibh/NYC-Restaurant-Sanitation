import React, { Component } from 'react';
import request from 'superagent';
import firebase from '../../../firebase.config.js';
import { withRouter } from 'react-router';
import App from '../App.jsx';

class FormForComments extends Component {
  constructor() {
    super();
    this.state = {
      signedOut: false,
      posts: [],
    }
    this.signOut = this.signOut.bind(this);
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
                   author: individualPostData.author,
                   content: individualPostData.content,
                   likeCount: individualPostData.likeCount,
                 };
               });
             }
             this.setState({ posts });
           });
  }
  handlePublish({ id, content, author, likeCount }) {
    if (id) {
      this.httpUpdatePost({ id, content, author, likeCount });
    } else {
      this.httpPublishPost({ content, author, likeCount });
    }
  }
  httpDeletePost(id) {
    const url = `https://restaurant-react.firebaseio.com/posts/${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpUpdatePost({ id, content, author, likeCount }) {
    const url = `https://restaurant-react.firebaseio.com/posts/${id}.json`;
    request.patch(url)
           .send({ content, author, likeCount })
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpPublishPost({ content, author }) {
    const url = 'https://restaurant-react.firebaseio.com/posts.json';
    request.post(url)
           .send({ content, author, likeCount: 0 })
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
  render() {
    return (
      <div>
      <button onClick={this.signOut}>Sign Out</button>
      {this.state.signedOut ? <App /> : false }
      <h1>Welcome to the <mark>DASHBOARD</mark> component, this component is <mark><b>NOT</b></mark> protected</h1>
      </div>
    )
  }
}

export default FormForComments;

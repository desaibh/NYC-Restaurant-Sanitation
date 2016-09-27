import React, { Component } from 'react';
import CommentsView from './CommentsView.jsx';
import CommentsWindowModal from './CommentsWindowModal.jsx';

const propTypes = {
  restaurant: React.PropTypes.string,
};

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalOpen: true,
    });
  }
  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <div>
        <CommentsView
          openModal={this.openModal}
        />
        { this.state.modalOpen ? <CommentsWindowModal closeModal={this.closeModal} /> : false }
      </div>
    );
  }
}

Comments.propTypes = propTypes;

export default Comments;

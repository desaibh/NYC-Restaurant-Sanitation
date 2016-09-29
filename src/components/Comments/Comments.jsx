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
      restaurant: '',
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalOpen: true,
      restaurant: this.props.restaurant,
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
        { this.state.modalOpen ? <CommentsWindowModal closeModal={this.closeModal} restaurant={this.state.restaurant} /> : false }
      </div>
    );
  }
}

Comments.propTypes = propTypes;

export default Comments;

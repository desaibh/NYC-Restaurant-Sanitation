import React from 'react';
import Main from '../Login/Main.jsx';

const propTypes = {
  closeModal: React.PropTypes.func.isRequired,
  restaurant: React.PropTypes.string.isRequired,
};

const CommentsWindowModal = ({ closeModal }) => {
  return (
    <div id="comments-modal">
      <div id="show-comments">
        <Main closeModal={closeModal} />
      </div>
    </div>
  );
};

CommentsWindowModal.propTypes = propTypes;

export default CommentsWindowModal;

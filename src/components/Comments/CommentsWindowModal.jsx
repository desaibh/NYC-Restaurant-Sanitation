import React from 'react';
import Main from '../Login/Main.jsx';

const propTypes = {
  // url: React.PropTypes.string.isRequired,
  closeModal: React.PropTypes.func.isRequired,
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

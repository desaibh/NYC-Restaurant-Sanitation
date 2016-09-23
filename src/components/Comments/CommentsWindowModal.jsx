import React from 'react';
import Main from './Main.jsx';

const propTypes = {
  // url: React.PropTypes.string.isRequired,
  closeModal: React.PropTypes.func.isRequired,
};

const CommentsWindowModal = ({ closeModal }) => {
  return (
    <div id="comments-modal">
      <div id="show-comments">
        <Main />
        <h2 id="close" onClick={closeModal}>CLOSE</h2>
      </div>
    </div>
  );
};

CommentsWindowModal.propTypes = propTypes;

export default CommentsWindowModal;

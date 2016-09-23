import React from 'react';

const propTypes = {
  // title: React.PropTypes.string.isRequired,
  // author: React.PropTypes.string.isRequired,
  openModal: React.PropTypes.func.isRequired,
};

const CommentsView = ({ openModal }) => {
  return (
    <div className="comments">
      <button onClick={openModal}>Comment Here</button>
    </div>
  );
};

CommentsView.propTypes = propTypes;

export default CommentsView;

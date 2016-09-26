import React from 'react';

const propTypes = {
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

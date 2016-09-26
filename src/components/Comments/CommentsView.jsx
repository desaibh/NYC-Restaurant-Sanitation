import React from 'react';

const propTypes = {
  openModal: React.PropTypes.func.isRequired,
};

const CommentsView = ({ openModal }) => {
  return (
    <div>
      <button onClick={openModal} className="comments">Tell Us About Your Experience</button>
    </div>
  );
};

CommentsView.propTypes = propTypes;

export default CommentsView;

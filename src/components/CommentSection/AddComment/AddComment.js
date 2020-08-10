import React, { useState } from 'react';
import classes from './AddComment.module.css';

const AddComment = (props) => {
  const [show, setShow] = useState(false);
  const replyStyle = {
    width: '24px',
    height: '24px',
  };
  const commentStyle = {
    width: '40px',
    height: '40px',
  };
  const style = props.comment ? commentStyle : replyStyle;

  return (
    <section className={classes.AddComment}>
      <img style={style} alt="avatar" />
      <input
        type="text"
        placeholder="Add a public comment"
        onFocus={() => setShow(true)}
      />
      {show ? (
        <div>
          <button onClick={() => setShow(false)}>Cancel</button>
          <button>{props.comment ? 'Comment' : 'Reply'}</button>
        </div>
      ) : null}
    </section>
  );
};

export default AddComment;

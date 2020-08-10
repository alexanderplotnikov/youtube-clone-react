import React from 'react';
import AddComment from '../AddComment/AddComment';
import classes from './Comments.module.css';

const comments = (props) => {
  return (
    <article className={classes.Comment}>
      <img alt="avatar" />
      <div className={classes.CommentBody}>
        <div className={classes.CommentHeader}>
          <p>Name</p>
          <span>6 days ago</span>
        </div>
        <p>First comment</p>
        <div className={classes.CommentControls}>
          <button>Like</button>
          <p>12</p>
          <button>Disike</button>
          <button>Reply</button>
        </div>
        <div>
          <AddComment />
        </div>
      </div>
    </article>
  );
};

export default comments;

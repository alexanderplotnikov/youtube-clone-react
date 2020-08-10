import React from 'react';
import AddComment from './AddComment/AddComment';
import Comments from './Comments/Comments';
import classes from './CommentSection.module.css';

const commentSection = (props) => {
  return (
    <article className={classes.CommentSection}>
      <div style={{ display: 'flex', marginBottom: '24px', marginTop: '16px' }}>
        <p>2,014 Comments</p>
        <button>Sort By</button>
      </div>
      <div className={classes.CommentInfo}>
        <AddComment comment />
      </div>

      <Comments />
    </article>
  );
};

export default commentSection;

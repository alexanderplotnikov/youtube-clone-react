import React from 'react';
import classes from './Recommendation.module.css';

const recommendation = () => {
  return (
    <article className={classes.Recommendation}>
      <img alt="thumbnail" />
      <div>
        <h2>Title</h2>
        <p>Channel Name</p>
        <div>
          <p>View count</p>
          <p>Date</p>
        </div>
      </div>
    </article>
  );
};

export default recommendation;

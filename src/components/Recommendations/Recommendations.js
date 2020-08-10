import React from 'react';
import Recommendation from './Recommendation/Recommendation';
import classes from './Recommendations.module.css';

const recommendations = (props) => {
  return (
    <aside className={classes.Recommendations}>
      <div>
        <p>Up Next</p>
        <Recommendation />
      </div>
      <Recommendation />
      <Recommendation />
      <Recommendation />
      <Recommendation />
    </aside>
  );
};

export default recommendations;

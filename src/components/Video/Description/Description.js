import React from 'react';
import classes from './Description.module.css';
const description = (props) => {
  return (
    <section className={classes.Description}>
      <h2>6 Investing Habits That Changed My Life</h2>
      <div className={classes.InfoMenu}>
        <p>
          421, 569 views <small>&sdot;</small> Jan 20, 2020
        </p>
        <div>
          <button>Like</button>
          <button>Dislike</button>
          <button>Share</button>
          <button>Save</button>
          <button>Options</button>
        </div>
      </div>
      <div className={classes.Info}>
        <div>
          <img alt="avatar" />
          <div>
            <p>Name</p>
            <p>2.26M subscribers</p>
          </div>
          <button>SUBSCRIBE</button>
        </div>
        <p>Lorem ipsum a bunch of words</p>
        <button>Show more</button>
      </div>
    </section>
  );
};

export default description;

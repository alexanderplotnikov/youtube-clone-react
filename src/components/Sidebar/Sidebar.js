import React from 'react';
import classes from './Sidebar.module.css';

const sidebar = (props) => {
  const style = props.show ? 'translateX(0)' : 'translateX(-100%)';
  return (
    <aside className={classes.Sidebar} style={{ transform: style }}>
      <div className={classes.Logo}>
        <button onClick={props.clicked}>Side</button>
        <img alt="youtube logo" />
      </div>
      <div>
        <nav>
          <section>
            <a href="null">
              <img alt="icon" />
              <p>Home</p>
            </a>
            <a href="null">
              <img alt="icon" />
              <p>Trending</p>
            </a>
            <a href="null">
              <img alt="icon" />
              <p>Subscriptions</p>
            </a>
          </section>
          <section>
            <a href="null">
              <img alt="icon" />
              <p>Library</p>
            </a>
            <a href="null">
              <img alt="icon" />
              <p>History</p>
            </a>
            <a href="null">
              <img alt="icon" />
              <p>Your videos</p>
            </a>
          </section>
        </nav>
        <footer>
          <p>About Press Copyright Contact Creators Advertise Developers</p>
          <small>&copy; 2020 Google don't copyright strike me LLC</small>
        </footer>
      </div>
    </aside>
  );
};

export default sidebar;

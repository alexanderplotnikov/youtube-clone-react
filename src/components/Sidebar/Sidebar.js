import React from 'react';
import classes from './Sidebar.module.css';

const sidebar = (props) => {
  return (
    <aside className={classes.Sidebar}>
      <div className={classes.Logo}>
        <button>Side</button>
        <img alt="youtube logo" />
      </div>
      <div>
        <nav>
          <section>
            <a>
              <img alt="icon" />
              <p>Home</p>
            </a>
            <a>
              <img alt="icon" />
              <p>Trending</p>
            </a>
            <a>
              <img alt="icon" />
              <p>Subscriptions</p>
            </a>
          </section>
          <section>
            <a>
              <img alt="icon" />
              <p>Library</p>
            </a>
            <a>
              <img alt="icon" />
              <p>History</p>
            </a>
            <a>
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

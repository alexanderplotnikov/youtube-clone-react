import React from 'react';
import classes from './Toolbar.module.css';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <button>Side</button>
      <img alt="youtube logo" />
      <div className={classes.Searchbar}>
        <input type="text" placeholder="Search" />
        <button>search</button>
      </div>
      <button>Live</button>
      <button>Settings</button>
      <button>Notif</button>
      <img alt="avatar" />
    </header>
  );
};

export default toolbar;

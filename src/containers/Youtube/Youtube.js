import React, { Component } from 'react';
import Video from '../../components/Video/Video';
import classes from './Youtube.module.css';

class Youtube extends Component {
  render() {
    return (
      <div className={classes.Youtube}>
        <Video />
        <aside>recommendations</aside>
        <article className="Comments">comments</article>
      </div>
    );
  }
}

export default Youtube;

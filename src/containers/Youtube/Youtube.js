import React, { Component } from 'react';
import classes from './Youtube.module.css';
import Video from '../../components/Video/Video';
import Recommendations from '../../components/Recommendations/Recommendations';
import CommentSection from '../../components/CommentSection/CommentSection';

class Youtube extends Component {
  render() {
    return (
      <div className={classes.Youtube}>
        <Video />
        <Recommendations />
        <CommentSection />
      </div>
    );
  }
}

export default Youtube;

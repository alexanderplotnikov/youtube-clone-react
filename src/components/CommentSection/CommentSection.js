import React from 'react';
import AddComment from './AddComment/AddComment';
import Comments from './Comments/Comments';

const commentSection = (props) => {
  return (
    <article>
      <AddComment />
      <Comments />
    </article>
  );
};

export default commentSection;

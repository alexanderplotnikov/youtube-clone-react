import React from 'react';
import classes from './Player.module.css';

const player = (props) => {
  return (
    <section className={classes.Player}>
      <div>
        <iframe
          title="formula 1"
          src="https://www.youtube.com/embed/ytLAOiYnNtU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default player;

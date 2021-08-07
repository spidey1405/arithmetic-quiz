import React from 'react';

export default function Heading({ classes, screenHeading }) {
  return <h1 className={classes.QuizHeading}>{screenHeading}</h1>;
}

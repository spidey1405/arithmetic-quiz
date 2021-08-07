import React from 'react';

export default function RangePicker({ classes, inputType }) {
  return (
    <div className={classes.RowComponent}>
      <p className={classes.Description}>Range From</p>
      <input className={classes.InputBox} type={inputType}></input>
      <p className={classes.DescriptionShort}>To: </p>
      <input className={classes.InputBox} type={inputType}></input>
    </div>
  );
}

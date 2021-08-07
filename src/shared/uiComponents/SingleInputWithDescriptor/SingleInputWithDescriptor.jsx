import React from 'react';

export default function SingleInputWithDescriptor({
  classes,
  Descriptor,
  inputType,
}) {
  return (
    <div className={classes.RowComponent}>
      <p className={classes.Description}>{Descriptor}</p>
      <input className={classes.InputBox} type={inputType}></input>
    </div>
  );
}

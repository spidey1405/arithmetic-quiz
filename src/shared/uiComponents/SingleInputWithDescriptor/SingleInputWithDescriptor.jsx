import React from 'react';

export default function SingleInputWithDescriptor({
  classes,
  Descriptor,
  inputType,
  onChangeHandler,
  inputValue,
  isNumberValid,
  invalidMessage,
}) {
  return (
    <div className={classes.RowComponent}>
      <p className={classes.Description}>{Descriptor}</p>
      <input
        className={classes.InputBox}
        type={inputType}
        onChange={onChangeHandler}
        value={inputValue}></input>
      {!isNumberValid && (
        <p className={classes.RegexValidatorComponent}>{invalidMessage}!</p>
      )}
    </div>
  );
}

import React from 'react';

export default function RangePicker({
  classes,
  inputType,
  operationRange,
  onChangeHandler,
}) {
  return (
    <div className={classes.RowComponent}>
      <p className={classes.Description}>Range From</p>
      <input
        className={classes.InputBox}
        type={inputType}
        onChange={(event) => onChangeHandler(event, 'from')}
        value={operationRange.from}></input>
      <p className={classes.DescriptionShort}>To: </p>
      <input
        className={classes.InputBox}
        type={inputType}
        onChange={(event) => onChangeHandler(event, 'to')}
        value={operationRange.to}></input>
      {!operationRange.isRangeValid && (
        <p className={classes.RegexValidatorComponent}>
          {operationRange.invalidMessage}!
        </p>
      )}
    </div>
  );
}

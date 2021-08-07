import React from 'react';

export default function RangePicker({ classes, operators }) {
  return (
    <div className={classes.RowComponent}>
      <p className={classes.Description}>Operators Allowed: </p>
      {operators.map((element, index) => {
        return (
          <p
            key={'Range_PICKER_' + index}
            className={classes.OperatorButtonActive}>
            {element}
          </p>
        );
      })}
    </div>
  );
}

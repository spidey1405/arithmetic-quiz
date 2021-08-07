import React from 'react';

export default function RangePicker({
  classes,
  operators,
  operationSelectHandler,
}) {
  return (
    <div className={classes.RowComponent}>
      <p className={classes.Description}>Operators Allowed: </p>
      {Object.keys(operators).map((element, index) => {
        const active = operators[element];
        return (
          <p
            key={'Range_PICKER_' + index}
            onClick={() => operationSelectHandler(element)}
            className={
              active
                ? classes.OperatorButtonActive
                : classes.OperatorButtonPassive
            }>
            {element}
          </p>
        );
      })}
    </div>
  );
}

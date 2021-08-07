import React from 'react';
import classes from './Screen.module.scss';

export default function Screen({ screenHeading }) {
  return (
    <>
      <h1 className={classes.QuizHeading}>{screenHeading}</h1>
      <div className={classes.Form}>
        <div className={classes.RowComponent}>
          <p className={classes.Description}>Number of Questions: </p>
          <input className={classes.InputBox} type={'number'}></input>
        </div>
        <div className={classes.RowComponent}>
          <p className={classes.Description}>Range From</p>
          <input className={classes.InputBox} type={'number'}></input>
          <p className={classes.DescriptionShort}>To: </p>
          <input className={classes.InputBox} type={'number'}></input>
        </div>

        <div className={classes.RowComponent}>
          <p className={classes.Description}>Operators Allowed: </p>
          <p className={classes.OperatorButtonActive}>+</p>
          <p className={classes.OperatorButtonPassive}>-</p>
          <p className={classes.OperatorButtonActive}>/</p>
          <p className={classes.OperatorButtonPassive}>X</p>
        </div>
        <button className={classes.BeginButton}>Begin</button>
      </div>
    </>
  );
}

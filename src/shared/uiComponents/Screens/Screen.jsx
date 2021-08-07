import React from 'react';
import classes from './Screen.module.scss';

import Heading from '../Heading/Heading';
import SingleInput from '../SingleInputWithDescriptor/SingleInputWithDescriptor';
import RangePicker from '../RangeSelector/RangePicker';
import OperatorPicker from '../OperatorPicker/OperatorPicker';

export default function Screen({
  screenHeading,
  questionChangeHandler,
  storeVars,
  screenIdentifier,
  rangeChangeHandler,
  operationSelectHandler,
}) {
  const decision = storeVars[screenIdentifier].isOneOperationSet;
  console.log(storeVars[screenIdentifier].isOneOperationSet);

  return (
    <>
      <Heading screenHeading={screenHeading} classes={classes} />
      <div className={classes.Form}>
        <SingleInput
          classes={classes}
          Descriptor={'Number of Questions: '}
          inputType={'number'}
          onChangeHandler={questionChangeHandler}
          inputValue={storeVars[screenIdentifier].totalQuestions}
          invalidMessage={storeVars[screenIdentifier].invalidMessage}
          isNumberValid={storeVars[screenIdentifier].isNumberValid}
        />

        <RangePicker
          classes={classes}
          inputType={'number'}
          onChangeHandler={rangeChangeHandler}
          operationRange={storeVars[screenIdentifier].operationRange}
        />
        <OperatorPicker
          classes={classes}
          operators={storeVars[screenIdentifier].operationsAllowed}
          operationSelectHandler={operationSelectHandler}
        />
        <button
          className={
            decision ? classes.BeginButton : classes.BeginButtonDisabled
          }
          disabled={!decision}
          onClick={() => console.log('Happend')}>
          Begin
        </button>
      </div>
    </>
  );
}

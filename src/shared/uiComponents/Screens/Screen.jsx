import React from 'react';
import classes from './Screen.module.scss';

import Heading from '../Heading/Heading';
import SingleInput from '../SingleInputWithDescriptor/SingleInputWithDescriptor';
import RangePicker from '../RangeSelector/RangePicker';
import OperatorPicker from '../OperatorPicker/OperatorPicker';

export default function Screen({ screenHeading }) {
  return (
    <>
      <Heading screenHeading={screenHeading} classes={classes} />
      <div className={classes.Form}>
        <SingleInput
          classes={classes}
          Descriptor={'Number of Questions: '}
          inputType={'number'}
        />

        <RangePicker classes={classes} inputType={'number'} />
        <OperatorPicker
          classes={classes}
          operators={['Addition', 'Multiplication', 'Subtraction', 'Division']}
        />
        <button className={classes.BeginButton}>Begin</button>
      </div>
    </>
  );
}

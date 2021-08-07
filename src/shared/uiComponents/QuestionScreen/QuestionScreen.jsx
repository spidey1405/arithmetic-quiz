import React from 'react';
import classes from './QuestionScreen.module.scss';
import { withRouter } from 'react-router-dom';
import { ImCross, ImCheckmark } from 'react-icons/im';

function QuestionScreen({
  questionString,
  answer,
  resultUpdateHandler,
  progressPayload,
}) {
  const isCorrect = (value) => {
    return +value === answer;
  };

  const executeResultHandler = (value) => {
    const result = isCorrect(value);
    resultUpdateHandler({ result, value });
    setValue('');
  };

  const [value, setValue] = React.useState(0);
  return (
    <div className={classes.QuestionScreen}>
      <div className={classes.QuestionScreenSub}>
        <p className={classes.QuestionScreenPara}>{questionString}</p>
        <input
          className={[classes.InputBox, classes.InputBoxNative].join(' ')}
          onChange={(event) => setValue(event.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && executeResultHandler(value)}
          value={value}></input>
      </div>
      <div className={classes.TopNavBar}>
        <p className={classes.CorrectAnswer}>
          Correct:{' '}
          <span>
            <ImCheckmark />
          </span>
          {' ' + progressPayload.correct}
        </p>
        <p className={classes.InCorrectAnswer}>
          Incorrect:{' '}
          <span>
            <ImCross />
          </span>
          {' ' + progressPayload.incorrect}
        </p>
        <p>Remaining: {progressPayload.remaining}</p>
      </div>
      <button
        className={[classes.ButtonAlign, classes.BeginButton].join(' ')}
        onClick={() => executeResultHandler(value)}>
        Next
      </button>
    </div>
  );
}

export default withRouter(QuestionScreen);

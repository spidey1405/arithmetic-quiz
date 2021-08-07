import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { questionConfig, resetProgress } from '../Slices/QuestionSlice';
import classes from './ResultsScreen.module.scss';

export default function ResultsScreen({ screenIdentifier }) {
  const quizSummary = useSelector(questionConfig);
  const dispatch = useDispatch();
  return (
    <div className={classes.quizSummary}>
      <h3 className={classes.Heading}>Test Complete</h3>
      <p className={classes.SummaryHeading}>Summary</p>
      <p>Correctly Answered: {quizSummary[screenIdentifier].correct}</p>
      <div className={classes.SummaryInfoPage}>
        {quizSummary[screenIdentifier].questionsStore.map((element, index) => {
          return (
            <div
              className={classes.Question}
              key={screenIdentifier + 'questions_summary_' + index}>
              <p className={classes.Question__questionNumber}>
                Question {index + 1}:
                <span
                  className={classes.Question__questionNumber_questionString}>
                  {' ' + element.questionString}
                </span>
              </p>
              <p className={classes.Question__correctAnswer}>
                Correct Answer: {element.correctAnswer}
              </p>
              <p
                className={
                  element.isCorrect
                    ? classes.Question__correctAnswerUser
                    : classes.Question__incorrectAnswerUser
                }>
                Your Answer: {element.answered}
              </p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => dispatch(resetProgress({ key: screenIdentifier }))}
        className={[classes.BeginButton, classes.buttonWidthAdjustment].join(
          ' '
        )}>
        Try Again
      </button>
    </div>
  );
}

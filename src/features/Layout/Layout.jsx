import React from 'react';
import classes from './Layout.module.scss';
import { config } from './screenConfig/config';
import { useSelector, useDispatch } from 'react-redux';
import DisplayScreen from './screen_hoc/Screen';
import ResultScreen from './screen_hoc/ResultsScreen';

import {
  questionConfig,
  storeQuestions,
  scoresIncrement,
  updateRemaining,
} from './Slices/QuestionSlice';
import { quizConfiguration } from './Slices/LayoutSlice';
import TestingScreen from '../../shared/uiComponents/QuestionScreen/QuestionScreen';

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const generateQuestion = ({ min, max, operation }) => {
  const firstNumber = randomNumber(min, max);
  const secondNumber = randomNumber(min, max);
  let operationString = `${firstNumber} - ${secondNumber} = `;
  switch (operation) {
    case 'addition':
      return {
        operationString: `${firstNumber} + ${secondNumber} = `,
        answer: firstNumber + secondNumber,
      };
    case 'multiplication':
      return {
        operationString: `${firstNumber} X ${secondNumber} = `,
        answer: firstNumber * secondNumber,
      };
    case 'division': {
      if (firstNumber % secondNumber === 0 && firstNumber > secondNumber) {
        return {
          operationString: `${firstNumber} X ${secondNumber} = `,
          answer: Math.floor(firstNumber / secondNumber),
        };
      } else {
        let fNum = randomNumber(min, max);
        let sNum = randomNumber(min, max);

        while (fNum % sNum !== 0 || sNum > fNum) {
          fNum = randomNumber(min, max);
          sNum = randomNumber(min, max);
        }
        return {
          operationString: `${fNum} / ${sNum} = `,
          answer: Math.floor(fNum / sNum),
        };
      }
    }
    default:
      return {
        operationString: operationString,
        answer: firstNumber - secondNumber,
      };
  }
};

export default function Layout() {
  const questionState = useSelector(questionConfig);
  const quizConfig = useSelector(quizConfiguration);

  const dispatch = useDispatch();

  return (
    <div className={classes.Layout}>
      {Object.keys(config).map((key) => {
        const element = config[key];
        let operationString;
        let answer;
        if (questionState[element.reduxEntrypoint].testinProgress) {
          let operations =
            quizConfig[element.reduxEntrypoint].operationsAllowed;
          operations = Object.keys(operations).filter((op) => operations[op]);
          const operationKeys = Object.keys(operations);
          const index = randomNumber(0, operationKeys.length - 1);

          const payload = {
            min: quizConfig[element.reduxEntrypoint].operationRange.from,
            max: quizConfig[element.reduxEntrypoint].operationRange.to,
            operation: operationKeys[index],
          };
          const result = generateQuestion(payload);
          operationString = result.operationString;
          answer = result.answer;
        }
        const totalQuestions =
          quizConfig[element.reduxEntrypoint].totalQuestions;
        const remainingQuestions = questionState[element.reduxEntrypoint]
          .testinProgress
          ? questionState[element.reduxEntrypoint].remaining === 0
            ? totalQuestions
            : questionState[element.reduxEntrypoint].remaining
          : totalQuestions;
        return (
          <div key={element.id} className={classes[element.className]}>
            {questionState[element.reduxEntrypoint].testinProgress ? (
              <TestingScreen
                finishStatus={
                  questionState[element.reduxEntrypoint].testinProgress
                }
                questionString={operationString}
                answer={answer}
                progressPayload={{
                  correct: questionState[element.reduxEntrypoint].correct,
                  incorrect: questionState[element.reduxEntrypoint].incorrect,
                  remaining: remainingQuestions,
                }}
                resultUpdateHandler={(value) => {
                  const payload = {
                    key: element.reduxEntrypoint,
                    value: value.result,
                  };
                  dispatch(scoresIncrement(payload));
                  dispatch(
                    storeQuestions({
                      key: element.reduxEntrypoint,
                      value: {
                        questionString: operationString,
                        correctAnswer: answer,
                        answered: +value.value,
                      },
                    })
                  );
                  payload.value = totalQuestions;
                  dispatch(updateRemaining(payload));
                }}
              />
            ) : questionState[element.reduxEntrypoint].testComplete ? (
              <ResultScreen screenIdentifier={element.reduxEntrypoint} />
            ) : (
              <DisplayScreen element={element} />
            )}
          </div>
        );
      })}
    </div>
  );
}

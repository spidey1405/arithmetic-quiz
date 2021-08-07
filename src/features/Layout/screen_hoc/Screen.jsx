import React from 'react';
import Screen from '../../../shared/uiComponents/Screens/Screen';
import { useSelector, useDispatch } from 'react-redux';
import {
  quizConfiguration,
  updateNumberOfQuestions,
  updateoperationRange,
  updateOptionsHandler,
} from '../Slices/LayoutSlice';
import { beginTest } from '../Slices/QuestionSlice';

export default function DisplayScreen({ element }) {
  const quizState = useSelector(quizConfiguration);
  const dispatch = useDispatch();
  return (
    <Screen
      {...element.componentProps}
      storeVars={quizState}
      quizState={quizState}
      screenIdentifier={element.reduxEntrypoint}
      questionChangeHandler={(event) => {
        dispatch(
          updateNumberOfQuestions({
            key: element.reduxEntrypoint,
            value: event.target.value,
          })
        );
      }}
      rangeChangeHandler={(event, rangeKey) => {
        dispatch(
          updateoperationRange({
            key: element.reduxEntrypoint,
            value: +event.target.value,
            rangeKey: rangeKey,
          })
        );
      }}
      operationSelectHandler={(value) => {
        dispatch(
          updateOptionsHandler({
            key: element.reduxEntrypoint,
            operationSelected: value,
          })
        );
      }}
      buttonClickHandler={() => {
        dispatch(beginTest({ key: element.reduxEntrypoint }));
      }}
    />
  );
}

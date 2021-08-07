import React from 'react';
import classes from './Layout.module.scss';
import Screen from '../../shared/uiComponents/Screens/Screen';
import { config } from './screenConfig/config';
import { useSelector, useDispatch } from 'react-redux';
import {
  quizConfiguration,
  updateNumberOfQuestions,
  updateoperationRange,
  updateOptionsHandler,
} from './Slices/LayoutSlice';

export default function Layout() {
  const quizState = useSelector(quizConfiguration);
  const dispatch = useDispatch();

  return (
    <div className={classes.Layout}>
      {Object.keys(config).map((key) => {
        const element = config[key];
        return (
          <div key={element.id} className={classes[element.className]}>
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
            />
          </div>
        );
      })}
    </div>
  );
}

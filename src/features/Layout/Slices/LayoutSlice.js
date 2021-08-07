import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  screen1: {
    totalQuestions: 20,
    isNumberValid: true,
    validatorRegex: '^[1-9]+[0-9]*$',
    invalidMessage: 'Number must be greater than 0',
    remaining: 20,
    operationRange: {
      from: 0,
      to: 10,
      invalidMessage:
        'Invalid Range! Lower bound must be less than Upper bound.',
      isRangeValid: true,
    },
    operationsAllowed: {
      addition: true,
      subtraction: true,
      division: true,
      multiplication: true,
    },
    isOneOperationSet: true,
  },
  screen2: {
    totalQuestions: 20,
    remaining: 20,
    isNumberValid: true,
    validatorRegex: '^[1-9]+[0-9]*$',
    invalidMessage: 'Number must be greater than 0',
    operationRange: {
      from: 0,
      to: 10,
      invalidMessage:
        'Invalid Range! Lower bound must be less than Upper bound.',
      isRangeValid: true,
    },
    operationsAllowed: {
      addition: true,
      subtraction: true,
      division: true,
      multiplication: true,
    },
    isOneOperationSet: true,
  },
};

export const quizConfig = createSlice({
  name: 'quizConfig',
  initialState,
  reducers: {
    updateNumberOfQuestions: (state, action) => {
      if (
        new RegExp(state[action.payload.key].validatorRegex, 'g').test(
          action.payload.value
        )
      ) {
        state[action.payload.key].totalQuestions = action.payload.value;
        state[action.payload.key].isNumberValid = true;
      } else {
        state[action.payload.key].isNumberValid = false;
      }
    },
    updateoperationRange: (state, action) => {
      let lowerBound;
      let upperBound;
      if (action.payload.rangeKey === 'from') {
        lowerBound = action.payload.value;
        upperBound = state[action.payload.key].operationRange.to;
      } else {
        lowerBound = state[action.payload.key].operationRange.from;
        upperBound = action.payload.value;
      }

      if (lowerBound < upperBound) {
        state[action.payload.key].operationRange.from = lowerBound;
        state[action.payload.key].operationRange.to = upperBound;
        state[action.payload.key].operationRange.isRangeValid = true;
      } else {
        state[action.payload.key].operationRange.isRangeValid = false;
      }
    },
    updateOptionsHandler: (state, action) => {
      state[action.payload.key].operationsAllowed[
        action.payload.operationSelected
      ] =
        !state[action.payload.key].operationsAllowed[
          action.payload.operationSelected
        ];

      let decision = false;

      Object.keys(state[action.payload.key].operationsAllowed).forEach(
        (element) => {
          decision =
            state[action.payload.key].operationsAllowed[element] || decision;
        }
      );

      state[action.payload.key].isOneOperationSet = decision;
    },
  },
});

export const {
  updateNumberOfQuestions,
  updateoperationRange,
  updateOptionsHandler,
} = quizConfig.actions;

export const quizConfiguration = (state) => state.quizConfig;

export default quizConfig.reducer;

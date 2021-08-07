import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  testinProgress: false,
  correct: 0,
  incorrect: 0,
  remaining: 0,
  testComplete: false,
  questionsStore: [],
};

const initialState = {
  screen1: defaultState,
  screen2: defaultState,
};

export const questionSlice = createSlice({
  name: 'questionSlice',
  initialState,
  reducers: {
    beginTest: (state, action) => {
      state[action.payload.key].testinProgress = true;
    },
    storeQuestions: (state, action) => {
      state[action.payload.key].questionsStore.push({
        questionString: action.payload.value.questionString,
        correctAnswer: action.payload.value.correctAnswer,
        answered: action.payload.value.answered,
        isCorrect:
          action.payload.value.correctAnswer === action.payload.value.answered,
      });
    },
    resetProgress: (state, action) => {
      state[action.payload.key] = defaultState;
    },
    completeTestConfirmation: (state, action) => {
      state[action.payload.key].testComplete = action.payload.value;
    },
    scoresIncrement: (state, action) => {
      if (action.payload.value) state[action.payload.key].correct += 1;
      else state[action.payload.key].incorrect += 1;
    },
    updateRemaining: (state, action) => {
      const questionsRemaining =
        action.payload.value -
        (state[action.payload.key].correct +
          state[action.payload.key].incorrect);
      state[action.payload.key].remaining = questionsRemaining;
      if (questionsRemaining === 0) {
        state[action.payload.key].testComplete = true;
        state[action.payload.key].testinProgress = false;
      }
    },
  },
});

export const {
  beginTest,
  resetProgress,
  scoresIncrement,
  updateRemaining,
  completeTestConfirmation,
  storeQuestions,
} = questionSlice.actions;

export const questionConfig = (state) => state.questionSlice;

export default questionSlice.reducer;

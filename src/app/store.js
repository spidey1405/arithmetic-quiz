import { configureStore } from '@reduxjs/toolkit';
import quizConfig from '../features/Layout/Slices/LayoutSlice';
import questionSlice from '../features/Layout/Slices/QuestionSlice';

export const store = configureStore({
  reducer: {
    quizConfig: quizConfig,
    questionSlice: questionSlice,
  },
});

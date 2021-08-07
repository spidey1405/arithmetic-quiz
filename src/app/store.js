import { configureStore } from '@reduxjs/toolkit';
import quizConfig from '../features/Layout/LayoutSlice';

export const store = configureStore({
  reducer: {
    quizConfig: quizConfig,
  },
});

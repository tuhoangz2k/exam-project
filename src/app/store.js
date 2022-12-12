import { configureStore } from '@reduxjs/toolkit';
import examListSlice from '../components/ExamListComp/examListSlice';
import userSlice from '../pages/DashBoard/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    exams: examListSlice,
  },
});

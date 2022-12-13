import { configureStore } from '@reduxjs/toolkit';
import examListSlice from '../components/ExamListComp/examListSlice';
import userSlice from '../pages/DashBoard/userSlice';
import answerListSlice from '../pages/Finish/finishSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    exams: examListSlice,
    answerList: answerListSlice,
  },
});

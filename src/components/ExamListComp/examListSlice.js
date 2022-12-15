import { createSlice } from '@reduxjs/toolkit';
import { EXAMLIST, USERS } from '../../constants';
import { checkLogin } from '../../hooks';

const initialState = {
  examList: EXAMLIST,
};
export const examListSlice = createSlice({
  name: 'exams',
  initialState,
  reducers: {
    updatePoints: (state, action) => {
      const exam = state.examList.find((exam) => exam.id === action.payload?.examId);
      console.log(action.payload?.pointOfMe);
      exam.pointsOfMe = action.payload?.pointOfMe;
    },
    deleteExam: (state, action) => {
      const exam = state.examList.findIndex((exam) => exam.id === action.payload);
      state.examList.splice(exam, 1);
    },
    addExam: (state, action) => {
      state.examList.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePoints, addExam, deleteExam } = examListSlice.actions;

export default examListSlice.reducer;

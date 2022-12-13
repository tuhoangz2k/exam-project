import { createSlice } from '@reduxjs/toolkit';
import { checkLogin } from '../../hooks';

const initialState = {
  answerQuestions: {},
  title: '',
  examId: null,
};
export const answerListSlice = createSlice({
  name: 'answerList',
  initialState,
  reducers: {
    addAnswer: (state, payload) => {},
    overWriteAnswer: (state, payload) => {},
  },
});

// Action creators are generated for each case reducer function
export const {} = answerListSlice.actions;

export default answerListSlice.reducer;

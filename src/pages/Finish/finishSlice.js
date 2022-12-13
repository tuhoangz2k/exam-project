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
    addAnswer: (state, action) => {
      state = {
        ...state,
        answerQuestions: { ...state.answerQuestions, ...action.payload },
      };
    },
    overWriteAnswer: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addAnswer, overWriteAnswer } = answerListSlice.actions;

export default answerListSlice.reducer;

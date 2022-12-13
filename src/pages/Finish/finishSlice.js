import { createSlice } from '@reduxjs/toolkit';
import { checkLogin } from '../../hooks';

const initialState = {
  answerQuestions: {},
  title: '',
  examId: null,
  isFinish: false,
};
export const answerListSlice = createSlice({
  name: 'answerList',
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.answerQuestions[action.payload.name] = action.payload.value;
    },
    setOpenExam: (state, action) => {
      state.title = action.payload.title;
      state.examId = action.payload.id;
    },
    overWriteAnswer: (state, action) => {},
    setIsFinish: (state, action) => {
      state.isFinish = action.payload;
    },
    reset: (state, action) => {
      state = { ...initialState };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAnswer, overWriteAnswer, setIsFinish, setOpenExam, reset } =
  answerListSlice.actions;

export default answerListSlice.reducer;

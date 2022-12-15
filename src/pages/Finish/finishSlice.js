import { createSlice } from '@reduxjs/toolkit';
import { checkLogin } from '../../hooks';

const initialState = {
  answerQuestions: {},
  title: '',
  examId: JSON.parse(localStorage.getItem('examStartInfo'))?.examId,
  isFinish: false,
  isStart: JSON.parse(localStorage.getItem('examStartInfo'))?.isStart || false,
  finishTime: JSON.parse(localStorage.getItem('examStartInfo'))?.finishTime || null,
  time: 0,
  startTime: JSON.parse(localStorage.getItem('examStartInfo'))?.startTime || null,
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
      state.isStart = true;
      const now = new Date().getTime();
      state.startTime = now;
      state.finishTime = now + 1000 * 60 * state.time;
      localStorage.setItem(
        'examStartInfo',
        JSON.stringify({
          startTime: now,
          finishTime: now + 1000 * 60 * state.time,
          isStart: true,
          examId: state.examId,
        }),
      );
    },

    overWriteAnswer: (state, action) => {},
    setIsFinish: (state, action) => {
      state.isFinish = action.payload;
    },
    reset: (state, action) => {
      state = { ...initialState };
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setFinishTime: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addAnswer,
  overWriteAnswer,
  setIsFinish,
  setOpenExam,
  reset,
  setTime,
  setFinishTime,
} = answerListSlice.actions;

export default answerListSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { EXAMLIST, USERS } from '../../constants';
import { checkLogin } from '../../hooks';

const initialState = {
  examList: EXAMLIST,
};
export const examListSlice = createSlice({
  name: 'exams',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = examListSlice.actions;

export default examListSlice.reducer;

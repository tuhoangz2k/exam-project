import { createSlice } from '@reduxjs/toolkit';
import { USERS } from '../../constants';
import { checkLogin, getUser } from '../../hooks';

const initialState = {
  userId: checkLogin(USERS),
  points: 0,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const User = USERS.find(
        (user) =>
          user.username === action.payload?.username &&
          user.password === action.payload?.password,
      );
      if (User) {
        state.userId = User.id;
        localStorage.setItem('userId', JSON.stringify(User.id));
      } else {
        state.userId = null;
      }
    },
    logout: (state, action) => {
      state.userId = null;
      localStorage.removeItem('userId');
    },
    addPoints: (state, action) => {
      console.log(action.payload);
      state.points = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, addPoints } = userSlice.actions;

export default userSlice.reducer;

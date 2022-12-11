import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/DashBoard/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

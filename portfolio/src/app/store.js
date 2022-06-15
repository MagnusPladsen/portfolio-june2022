import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../Features/weather';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

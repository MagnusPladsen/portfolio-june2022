import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../Features/weather';
import todoReducer from '../Features/todos';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    todo: todoReducer,
  },
});

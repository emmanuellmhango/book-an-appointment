import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors';
import reservationsReducer from './reservations';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    reservations: reservationsReducer,
  },
});

export default store;

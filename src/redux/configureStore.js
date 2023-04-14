import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
  },
});

export default store;

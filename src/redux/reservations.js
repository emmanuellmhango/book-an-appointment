import { createAsyncThunk } from '@reduxjs/toolkit';
import ReservationService from '../services/ReservationService';

const initialState = {
  reservations: [
    {
      id: 1,
      user_id: 1,
      doctor_id: 1,
      date: '2023-04-10',
      city: 'Miami',
    },
    {
      id: 2,
      user_id: 1,
      doctor_id: 2,
      date: '2023-04-11',
      city: 'New York',
    },
    {
      id: 3,
      user_id: 1,
      doctor_id: 2,
      date: '2023-04-12',
      city: 'New York',
    },
  ],
  loading: false,
  error: null,
};

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const response = await ReservationService.getAll();
    return response;
  },
);

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchReservations.pending.type:
      return {
        ...state,
        loading: true,
      };
    case fetchReservations.fulfilled.type:
      return {
        ...state,
        loading: false,
        reservations: action.payload,
      };
    case fetchReservations.rejected.type:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reservationsReducer;

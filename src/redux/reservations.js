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
    {
      id: 4,
      user_id: 1,
      doctor_id: 2,
      date: '2023-04-14',
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

export const deleteReservation = (reservationId) => ({
  type: 'DELETE_RESERVATION',
  payload: reservationId,
});

export const addReservation = (reservation) => ({
  type: 'ADD_RESERVATION',
  payload: reservation,
});

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
        reservations: [...state.reservations, ...action.payload],
      };
    case fetchReservations.rejected.type:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'DELETE_RESERVATION':
      return {
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload,
        ),
      };
    case 'ADD_RESERVATION':
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    default:
      return state;
  }
};

export default reservationsReducer;

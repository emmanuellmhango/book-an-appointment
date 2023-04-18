import { createAsyncThunk } from '@reduxjs/toolkit';
import ReservationService from '../services/ReservationService';

const initialState = {
  reservations: [],
  loading: false,
  error: null,
};

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const response = await ReservationService.getAll();
    const { data } = response;
    return data.reservations;
  },
);

export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservationData) => {
    console.log('getting data...', reservationData);
    const response = await ReservationService.create(reservationData);
    return response;
  },
);

export const deleteReservation = (reservationId) => ({
  type: 'DELETE_RESERVATION',
  payload: reservationId,
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
        reservations: [...action.payload],
      };
    case fetchReservations.rejected.type:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'DELETE_RESERVATION':
      return {
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload,
        ),
      };
    case addReservation.fulfilled.type:
      console.log('action.payload', action.payload);
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    default:
      return state;
  }
};

export const getLoadingState = (state) => state.reservations.loading;
export const getReservations = (state) => state.reservations.reservations;
export const getError = (state) => state.reservations.error;

export default reservationsReducer;

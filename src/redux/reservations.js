import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

  doctors: [
    {
      id: 1,
      name: 'Juan Muñoz',
      specialization: 'Pediatrics',
      city: 'Miami',
      fee: 200,
      photo: 'https://st2.depositphotos.com/1743476/5738/i/950/depositphotos_57385697-stock-photo-confident-mature-doctor.jpg',
      experience: 20,
    },
    {
      id: 2,
      name: 'Pedro Fuentes',
      specialization: 'Pediatrics',
      city: 'New York',
      fee: 200,
      photo: 'https://st2.depositphotos.com/1743476/5738/i/950/depositphotos_57385697-stock-photo-confident-mature-doctor.jpg',
      experience: 10,
    },
  ],
  loading: false,
  error: null,
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RESERVATIONS':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_RESERVATIONS_SUCCESS':
      return {
        ...state,
        loading: false,
        reservations: action.payload,
      };
    case 'FETCH_RESERVATIONS_ERROR':
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

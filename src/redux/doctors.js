import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = 'book-an-appointment/doctorsReducer/GET';
const ADD = 'book-an-appointment/doctorsReducer/ADD';

const initialState = {
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
// Reducer
const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET}/fulfilled`: {
      const allDoctors = action.payload.data.map((doctor) => ({
        id: doctor.id,
        name: doctor.name,
        photo: doctor.photo,
        specialization: doctor.specialization,
        city: doctor.city,
        fee: doctor.fee,
        experience: doctor.experience,
      }));
      return allDoctors;
    }
    case `${ADD}/fulfilled`: {
      const newDoctor = {
        name: action.payload.name,
        photo: action.payload.photo,
        specialization: action.payload.specialization,
        city: action.payload.city,
        fee: action.payload.fee,
        experience: action.payload.experience,
      };
      return [...state, newDoctor];
    }
    default: {
      return state;
    }
  }
};

// Action creator
export const getDoctors = (payload) => ({
  type: GET,
  payload,
});

export const addDoctor = (payload) => ({
  type: ADD,
  payload,
});

// API
export const fetchDoctors = createAsyncThunk(GET, async () => {
  const response = await fetch('http://localhost:3000/api/v1/doctors');
  const data = await response.json();
  return { data };
});

export const createDoctor = createAsyncThunk(ADD, async (doctorData) => {
  const response = await axios.post('http://localhost:3000/api/v1/doctors', { doctor: doctorData });
  // console.log(response.data);
  return response.data;
});

export default doctorsReducer;

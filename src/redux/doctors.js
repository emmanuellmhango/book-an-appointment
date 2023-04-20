import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const GET = 'book-an-appointment/doctorsReducer/GET';
const ADD = 'book-an-appointment/doctorsReducer/ADD';
const DELETE = 'book-an-appointment/doctorsReducer/DELETE';

// Reducer
const doctorsReducer = (state = [], action) => {
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
    case `${DELETE}/fulfilled`: {
      const { id } = action.payload;
      const updatedDoctors = state.filter((doctor) => doctor.id !== id);
      return updatedDoctors;
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

export const removeDoctor = (payload) => ({
  type: DELETE,
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
  const dispatch = useDispatch();
  dispatch(fetchDoctors());
  return response.data;
});

export const deleteDoctor = createAsyncThunk(DELETE, async (id) => {
  await axios.delete(`http://localhost:3000/api/v1/doctors/${id}`);
  return { id }; // Return the deleted doctor's id for updating the state
});

export default doctorsReducer;

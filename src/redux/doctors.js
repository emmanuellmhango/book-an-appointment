import { createAsyncThunk } from '@reduxjs/toolkit';

const GET = 'book-an-appointment/doctorsReducer/GET';

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

// API
export const fetchDoctors = createAsyncThunk(GET, async () => {
  const response = await fetch('http://localhost:3000/api/v1/doctors');
  const data = await response.json();
  return { data };
});

export default doctorsReducer;

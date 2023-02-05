import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', { name, number });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactsID, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactsID}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
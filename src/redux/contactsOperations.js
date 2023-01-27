import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63cc24e99b72d2a88e08e7ea.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({name, phone}, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, phone });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactsID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactsID}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
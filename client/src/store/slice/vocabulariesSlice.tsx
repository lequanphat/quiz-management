import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/AxiosInstance';

const initialState = {
  isLoading: false,
  vocabulariesList: [],
};
export const vocabulariesSlice = createSlice({
  name: 'vocabulary',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVocabularies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVocabularies.fulfilled, (state, action) => {
        state.vocabulariesList = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getVocabularies.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createNewVocabulary.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewVocabulary.fulfilled, (state, action) => {
        state.vocabulariesList.push(action.payload.data);
        state.isLoading = false;
      })
      .addCase(createNewVocabulary.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const getVocabularies = createAsyncThunk(
  'auth/getVocabularies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/vocabularies');
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data.message });
    }
  },
);
export const createNewVocabulary = createAsyncThunk(
  'auth/createVocabulary',
  async (data: { word: string; mean: string }, { rejectWithValue }) => {
    try {
      const response = await api.post('/vocabularies/create-vocabulary', data);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data.message });
    }
  },
);
export default vocabulariesSlice.reducer;

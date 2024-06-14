import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/AxiosInstance';

const initialState = {
  isLoading: false,
};
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (data: FormData, { rejectWithValue }) => {
    try {
      const response = await api.post('/users/update-profile', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data.message });
    }
  },
);
export default userSlice.reducer;

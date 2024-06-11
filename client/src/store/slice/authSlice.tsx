import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/AxiosInstance';
import { AuthType } from '../../types';

const initialState: AuthType = {
  displayName: '',
  avatar: '',
  isAuthenticated: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    resetUser() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.displayName = action.payload.data.displayName;
        state.avatar = action.payload.data.avatar;
        state.isAuthenticated = true;
        state.isLoading = false;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(userLogin.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.displayName = action.payload.data.displayName;
        state.avatar = action.payload.data.avatar;
        state.isAuthenticated = true;
        state.isLoading = false;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const userLogin = createAsyncThunk(
  'auth/login',
  async (data: { credential: string }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/login', data);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data.message });
    }
  },
);

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/users/user');
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data.message });
    }
  },
);

export default userSlice.reducer;
export const { resetUser } = userSlice.actions;

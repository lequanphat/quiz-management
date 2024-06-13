import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/AxiosInstance';
import { AuthType } from '../../types';

const initialState: AuthType = {
  displayName: '',
  email: '',
  avatar: '',
  isAuthenticated: false,
  isLoading: false,
  isLoaded: false,
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
        state.isLoaded = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.displayName = action.payload.data.displayName;
        state.email = action.payload.data.email;
        state.avatar = action.payload.data.avatar;
        state.isAuthenticated = true;
        state.isLoading = false;
        localStorage.setItem('token', action.payload.token);
        state.isLoaded = true;
      })
      .addCase(userLogin.rejected, (state) => {
        state.isLoading = false;
        state.isLoaded = true;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.isLoaded = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.displayName = action.payload.data.displayName;
        state.email = action.payload.data.email;
        state.avatar = action.payload.data.avatar;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.isLoaded = true;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
        state.isLoaded = true;
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

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/AxiosInstance';
import { AuthType, Role } from '../../types';

const initialState: AuthType = {
  displayName: '',
  email: '',
  avatar: '',
  role: Role.USER,
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
      .addCase(userGoogleLogin.pending, (state) => {
        state.isLoading = true;
        state.isLoaded = false;
      })
      .addCase(userGoogleLogin.fulfilled, (state, action) => {
        state.displayName = action.payload.data.displayName;
        state.email = action.payload.data.email;
        state.avatar = action.payload.data.avatar;
        state.role = action.payload.data.role;
        state.isAuthenticated = true;
        state.isLoading = false;
        localStorage.setItem('token', action.payload.token);
        state.isLoaded = true;
      })
      .addCase(userGoogleLogin.rejected, (state) => {
        state.isLoading = false;
        state.isLoaded = true;
      })
      .addCase(userRegister.pending, (state) => {
        state.isLoading = true;
        state.isLoaded = false;
      })
      .addCase(userRegister.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoaded = true;
      })
      .addCase(userRegister.rejected, (state) => {
        state.isLoading = false;
        state.isLoaded = true;
      })
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.isLoaded = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.displayName = action.payload.data.displayName;
        state.email = action.payload.data.email;
        state.avatar = action.payload.data.avatar;
        state.role = action.payload.data.role;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.isLoaded = true;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(userLogin.rejected, (state) => {
        state.isLoading = false;
        state.isLoaded = true;
      })
      .addCase(userVerifyAccount.pending, (state) => {
        state.isLoading = true;
        state.isLoaded = false;
      })
      .addCase(userVerifyAccount.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoaded = true;
      })
      .addCase(userVerifyAccount.rejected, (state) => {
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
        state.role = action.payload.data.role;
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

export const userGoogleLogin = createAsyncThunk(
  'auth/google-login',
  async (data: { credential: string }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/google-login', data);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data.message });
    }
  },
);

export const userRegister = createAsyncThunk(
  'auth/register',
  async (
    data: { displayName: string; email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post('/auth/register', data);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data.message });
    }
  },
);

export const userVerifyAccount = createAsyncThunk(
  'auth/verify-account',
  async (data: { otp: string; user_id: string }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/verify-account', data);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data.message });
    }
  },
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (data: { email: string; password: string }, { rejectWithValue }) => {
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

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import userReducer from './slice/userSlice';
import vocabulariesReducer from './slice/vocabulariesSlice';
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  vocabulary: vocabulariesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

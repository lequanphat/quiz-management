import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../store/slice/authSlice';

export const useFetchUser = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
};

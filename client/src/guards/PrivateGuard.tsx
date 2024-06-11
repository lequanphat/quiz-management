import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { StateType } from '../types';

interface PrivateRouteProps {
  component: FC;
}
const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }) => {
  const { isAuthenticated, isLoading } = useSelector(
    (state: StateType) => state.auth,
  );
  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/auth/login" replace={true} />;
  }
  return <Component />;
};

export default PrivateRoute;

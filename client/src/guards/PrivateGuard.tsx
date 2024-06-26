import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { Role, StateType } from '../types';

interface PrivateRouteProps {
  component: FC;
}
const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }) => {
  const { isAuthenticated, isLoading, isLoaded, role } = useSelector(
    (state: StateType) => state.auth,
  );
  if (!isAuthenticated && !isLoading && isLoaded) {
    return <Navigate to="/auth/login" replace={true} />;
  }
  if (role === Role.ADMIN) return <Navigate to="/admin" replace={true} />;
  return <Component />;
};

export default PrivateRoute;

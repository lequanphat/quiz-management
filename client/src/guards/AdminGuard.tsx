import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { Role, StateType } from '../types';

interface AdminRouteProps {
  component: FC;
}
const AdminRoute: FC<AdminRouteProps> = ({ component: Component }) => {
  const { isAuthenticated, isLoading, isLoaded, role } = useSelector(
    (state: StateType) => state.auth,
  );
  if (!isAuthenticated && !isLoading && isLoaded) {
    return <Navigate to="/auth/login" replace={true} />;
  }
  if (role === Role.USER && !isLoading && isLoaded)
    return <Navigate to="/" replace={true} />;

  return <Component />;
};

export default AdminRoute;

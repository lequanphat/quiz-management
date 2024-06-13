import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { StateType } from '../types';

interface AuthRouteProps {
  component: FC;
}
const AuthRoute: FC<AuthRouteProps> = ({ component: Component }) => {
  const { isAuthenticated, isLoading, isLoaded } = useSelector(
    (state: StateType) => state.auth,
  );
  if (isAuthenticated && !isLoading && isLoaded) {
    return <Navigate to="/" replace={true} />;
  }
  return <Component />;
};

export default AuthRoute;

import { ComponentType, Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { MainLayout } from '../layouts/MainLayout';
import AuthRoute from '../guards/AuthGuard';
import PrivateRoute from '../guards/PrivateGuard';

interface Props {}

const Loadable = (Component: ComponentType<Props>) => (props: Props) => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/auth',
      element: <AuthRoute component={AuthLayout} />,
      children: [{ path: 'login', element: <Login /> }],
    },
    {
      path: '/',
      element: <PrivateRoute component={MainLayout} />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/online-tests', element: <OnlineTests /> },
        { path: '/online-courses', element: <OnlineCouses /> },
        { path: '/my-courses', element: <TempPage /> },
        { path: '/blogs', element: <TempPage /> },
      ],
    },
    { path: '/404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// dinamic import
const Page404 = Loadable(lazy(() => import('../pages/errors/404')));
const Dashboard = Loadable(lazy(() => import('../pages/dashboard/Dashboard')));
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const OnlineCouses = Loadable(
  lazy(() => import('../pages/dashboard/OnlineCouses')),
);
const OnlineTests = Loadable(
  lazy(() => import('../pages/dashboard/OnlineTests')),
);

const TempPage = Loadable(lazy(() => import('../pages/dashboard/TempPage')));

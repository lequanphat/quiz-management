import { ComponentType, Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { MainLayout } from '../layouts/MainLayout';
import AuthRoute from '../guards/AuthGuard';
import PrivateRoute from '../guards/PrivateGuard';
import { AdminLayout } from '../layouts/AdminLayout';
import AdminRoute from '../guards/AdminGuard';

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
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'verify-account/:user_id', element: <VerifyAccount /> },
      ],
    },
    {
      path: '/admin',
      element: <AdminRoute component={AdminLayout} />,
      children: [
        { path: 'vocabularies', element: <Vocabularies /> },
        { path: '', element: <TempPage /> },
      ],
    },
    {
      path: '/',
      element: <PrivateRoute component={MainLayout} />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/online-tests', element: <OnlineTests /> },
        { path: '/online-courses', element: <OnlineCouses /> },
        { path: '/my-courses', element: <TempPage /> },
        { path: '/blogs', element: <Blogs /> },
        { path: '/my-classes', element: <MyClasses /> },
        { path: '/online-tests/:id', element: <TestDetails /> },
        { path: '/online-tests/:id/practice', element: <PacticeTest /> },
        { path: '/vocabularies', element: <VocabulariesPage /> },
        { path: '/profile', element: <Profile /> },
      ],
    },
    { path: '/404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// dinamic import
const Page404 = Loadable(lazy(() => import('../pages/errors/404')));
const Dashboard = Loadable(lazy(() => import('../pages/dashboard/Dashboard')));
// auth
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const VerifyAccount = Loadable(
  lazy(() => import('../pages/auth/VerifyAccount')),
);

// dashboard
const OnlineCouses = Loadable(
  lazy(() => import('../pages/dashboard/OnlineCouses')),
);
const OnlineTests = Loadable(
  lazy(() => import('../pages/dashboard/OnlineTests')),
);

const TempPage = Loadable(lazy(() => import('../pages/dashboard/TempPage')));
const TestDetails = Loadable(
  lazy(() => import('../pages/dashboard/TestDetails')),
);
const PacticeTest = Loadable(
  lazy(() => import('../pages/dashboard/PracticeTest')),
);
const Blogs = Loadable(lazy(() => import('../pages/dashboard/Blogs')));
const MyClasses = Loadable(lazy(() => import('../pages/dashboard/MyClasses')));
const Profile = Loadable(lazy(() => import('../pages/dashboard/Profile')));

// admin

const Vocabularies = Loadable(
  lazy(() => import('../pages/admin/Vocabularies')),
);

const VocabulariesPage = Loadable(
  lazy(() => import('../pages/dashboard/Vocabularies')),
);

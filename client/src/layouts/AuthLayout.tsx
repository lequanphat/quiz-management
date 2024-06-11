import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center flex-col w-[100vw] h-[100vh]">
      <Outlet />
    </div>
  );
};

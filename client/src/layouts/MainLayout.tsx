import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh]">
      <Outlet />
    </div>
  );
};

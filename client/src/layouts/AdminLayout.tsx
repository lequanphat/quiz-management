import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/admin/Navbar';
import { Header } from '../components/admin/Header';

export const AdminLayout = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="w-[280px]">
        <Navbar />
      </div>
      <div className="flex-1">
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

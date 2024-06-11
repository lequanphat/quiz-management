import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const MainLayout = () => {
  return (
    <div className="">
      <Sidebar />
      <div className="pt-[64px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="pt-[64px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

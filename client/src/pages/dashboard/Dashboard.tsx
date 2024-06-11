import { useSelector } from 'react-redux';
import { StateType } from '../../types';

const Dashboard = () => {
  const { displayName } = useSelector((state: StateType) => state.auth);
  return (
    <div className="bg-[#e8f2ff] p-4 h-[calc(100vh-60px)]">
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="text-[24px] font-bold">
          Xin chào <span className="text-[#35509a]">{displayName}</span>
        </h1>
      </div>
    </div>
  );
};
export default Dashboard;

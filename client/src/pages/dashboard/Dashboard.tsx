import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../types';
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../../store/slice/authSlice';

const Dashboard = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { displayName } = useSelector((state: StateType) => state.auth);

  // handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(resetUser());
    navigate('/auth/login');
  };
  return (
    <div className="bg-slate-200 p-4 min-w-[40%]">
      <h1 className="text-center">
        Hello <strong>{displayName}</strong>
      </h1>
      <div className="flex flex-col gap-2 py-4">
        <button className="bg-slate-400 w-full px-2 py-1 rounded-md">
          Play online
        </button>
        <button className="bg-slate-400 w-full px-2 py-1 rounded-md">
          Play with friend
        </button>
        <button className="bg-slate-400 w-full px-2 py-1 rounded-md">
          Play with Robot
        </button>
        <button
          onClick={handleLogout}
          className="bg-slate-400 w-full px-2 py-1 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default Dashboard;

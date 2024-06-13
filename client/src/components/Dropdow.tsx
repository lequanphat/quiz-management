import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { resetUser } from '../store/slice/authSlice';

export const Dropdow = ({ show }: { show: boolean }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  // handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(resetUser());
    navigate('/auth/login');
  };
  return (
    <div
      className={`absolute top-full right-0 w-max min-w-[240px] bg-white p-4 rounded-md text-black font-normal cursor-default
          ${show ? 'visible' : 'hidden'}`}
      style={{
        boxShadow:
          '0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12)',
      }}
    >
      <div className="px-2">
        <h4 className="font-semibold text-[#8c98a4]">Thông báo</h4>
        <div className="py-2">
          <p className="italic ">Bạn chưa có thông báo mới</p>
        </div>
        <a className="text-[#35509a]" href="">
          Xem tất cả
        </a>
      </div>

      <ul className="pt-2">
        <li className="px-2 py-1 hover:bg-[#f8fafd] cursor-pointer">
          <Link to="/profile">Trang cá nhân</Link>
        </li>
        <li
          onClick={handleLogout}
          className="px-2 py-1 hover:bg-[#f8fafd] hover:text-[#e43a45] cursor-pointer "
        >
          Đăng xuất
        </li>
      </ul>
    </div>
  );
};

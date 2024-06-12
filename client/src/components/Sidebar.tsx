import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../types';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { resetUser } from '../store/slice/authSlice';
import { IoMenuSharp } from 'react-icons/io5';
export const Sidebar = () => {
  const { avatar } = useSelector((state: StateType) => state.auth);
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);
  return (
    <div
      className="w-full px-4 h-[64px] fixed z-[999] bg-white flex items-center justify-between"
      style={{ boxShadow: '0 4px 4px -4px rgba(0, 0, 0, .2)' }}
    >
      <nav className=" w-full flex items-center justify-between">
        <div>
          <h1 className="text-[28px] font-bold">QUIZ&TRICK</h1>
        </div>
        <div>
          <ul className="lg:flex xl:relative lg:relative md:absolute sm:absolute absolute top-full right-0 justify-end items-center block bg-white">
            <MenuItem title="Trang chủ" to="/" />
            <MenuItem title="Đề thi online" to="online-tests" />
            <MenuItem title="Khóa học online" to="online-courses" />
            <MenuItem title="Bài viết" to="blogs" />
            <MenuItem title="Lớp học của tôi" to="my-classes" />
            <li
              className="relative p-2 mx-1 text-[#67a2e2] hover:text-[#35509a] cursor-pointer font-semibold lg:block hidden"
              onClick={() => {
                setIsShowDropdown(!isShowDropdown);
              }}
            >
              <div
                className="w-[40px] h-[40px] rounded-full border-2 border-solid border-[#ccc]"
                style={{
                  backgroundColor: '#f0f0f0',
                  backgroundImage: `url(${avatar})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <Dropdow show={isShowDropdown} />
            </li>
          </ul>
          <div className="lg:hidden cursor-pointer">
            <IoMenuSharp size={24} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export const MenuItem = ({
  title,
  to,
  ...props
}: {
  title: string;
  to: string;
}) => {
  return (
    <li
      {...props}
      className="lg:w-auto xl:w-auto md:w-full  p-2 mx-1 text-[#71869d] hover:text-[#35509a] cursor-pointer font-semibold"
    >
      <Link to={to}>{title}</Link>
    </li>
  );
};

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

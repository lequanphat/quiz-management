import { useSelector } from 'react-redux';
import { StateType } from '../types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { Dropdow } from './Dropdow';
export const Header = () => {
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
            <MenuItem title="Từ vựng" to="vocabularies" />
            <li
              className="relative p-2 mx-1 text-[#67a2e2] hover:text-[#35509a] cursor-pointer font-semibold lg:block hidden"
              onClick={() => {
                setIsShowDropdown(!isShowDropdown);
              }}
            >
              <div
                className="w-[40px] h-[40px] rounded-full border-2 border-solid border-[#ccc] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundColor: '#f0f0f0',
                  backgroundImage: `url(${avatar})`,
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

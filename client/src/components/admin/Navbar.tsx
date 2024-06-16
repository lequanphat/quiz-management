import { useState } from 'react';
import {
  IoAdd,
  IoBook,
  IoCellular,
  IoChevronDownSharp,
  IoColorPalette,
  IoDocuments,
  IoImages,
  IoLanguage,
  IoLayers,
  IoLockClosed,
  IoPeopleSharp,
  IoSettingsSharp,
  IoStatsChart,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="h-full p-4 bg-primary text-white">
      <h1 className="text-[24px] font-bold ">QUIZ&TRICK</h1>
      <div className="pt-4"></div>
      <div className="py-2">
        <h1 className="text-[16px] uppercase font-semibold opacity-75">
          Tổng quan
        </h1>
        <div>
          <NavbarItem title="Trang chủ" icon={<IoColorPalette />} to="" />
          <NavbarItem title="Thống kê" icon={<IoCellular />} to="123" />
          <NavbarItem title="Kinh doanh" icon={<IoStatsChart />} to="123" />
        </div>
      </div>
      <div className="py-2">
        <h1 className="text-[16px] uppercase font-semibold opacity-75">
          Ứng dụng
        </h1>
        <div>
          <NavbarItem
            title="Người dùng"
            icon={<IoPeopleSharp />}
            children={[
              { title: 'Học sinh', to: 'students' },
              { title: 'Giáo viên', to: 'teachers' },
              { title: 'Quản trị viên', to: 'admins' },
            ]}
          />
          <NavbarItem
            title="Đề thi"
            icon={<IoDocuments />}
            children={[
              { title: 'Danh mục', to: 'categories' },
              { title: 'Đề thi', to: 'tests' },
              { title: 'Câu hỏi', to: 'questions' },
            ]}
          />
          <NavbarItem title="Từ vựng" icon={<IoLanguage />} to="vocabularies" />
          <NavbarItem title="Khóa học" icon={<IoBook />} to="123" />
          <NavbarItem title="Lớp học" icon={<IoLayers />} to="123" />
          <NavbarItem title="Bài viết" icon={<IoImages />} to="123" />
        </div>
      </div>
      <div className="py-2">
        <h1 className="text-[16px] uppercase font-semibold opacity-75">
          Cài đặt
        </h1>
        <div>
          <NavbarItem title="Phân quyền" icon={<IoLockClosed />} to="123" />
          <NavbarItem title="Cài đặt" icon={<IoSettingsSharp />} to="123" />
        </div>
      </div>
    </nav>
  );
};

interface ChildrenType {
  title: string;
  to: string;
}
export const NavbarItem = ({
  title,
  icon,
  to,
  children,
}: {
  title: string;
  icon: JSX.Element;
  to?: string;
  children?: ChildrenType[];
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <Link
      to={to || ''}
      className="block my-1 p-0 h-max"
      onClick={() => {
        setIsShow(!isShow);
      }}
    >
      <div className="w-full flex items-center justify-between hover:bg-slate-400 cursor-pointer px-2 py-1  rounded-sm">
        <div className="flex items-center gap-2">
          <span>{icon}</span>
          <span>{title}</span>
        </div>
        <div>{children && children.length > 0 && <IoChevronDownSharp />}</div>
      </div>
      <div className="w-full">
        {isShow && (
          <ul>
            {children &&
              children.length > 0 &&
              children.map((child) => (
                <Link
                  to={child.to}
                  className="flex items-center gap-2 px-2 py-1 hover:bg-slate-400 cursor-pointer rounded-sm"
                >
                  <IoAdd />
                  {child.title}
                </Link>
              ))}
          </ul>
        )}
      </div>
    </Link>
  );
};

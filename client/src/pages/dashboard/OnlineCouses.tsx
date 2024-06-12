import { CourseItem } from '../../section/courses/CouseItem';

const OnlineCouses = () => {
  return (
    <div className="p-12 ">
      <div>
        <h1 className="text-[24px] font-semibold">Danh sách khóa học</h1>
        <div className="flex items-center flex-wrap py-2">
          <div className="px-5 py-1 mr-2 text-[#35509a] bg-[#e8f2ff]  rounded-full cursor-pointer">
            Tất cả
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            Công nghệ thông tin
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            Thiết kế đồ họa
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            Lập trình game
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            Quản lý thị trường
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            Tiếng trung
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            Tiếng anh
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            Tiếng hàn
          </div>
        </div>

        <div className="py-6 grid xl:grid-cols-4 lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-2">
          <CourseItem
            image="https://hoclaptrinhonline.asia/pluginfile.php/2137/course/overviewfiles/la%CC%A3%CC%82p-tri%CC%80nh-web-min.png"
            title="Lập trình từ ZERO đến HERO"
            duration={60}
            comments={1455}
            joined={24}
          />
          <CourseItem
            image="https://lptech.asia/uploads/files/2020/05/25/lap-trinh-web-php-mysql.png"
            title="Lập trình web bằng PHP & MySQL"
            duration={60}
            comments={1455}
            joined={24}
          />
        </div>
      </div>
    </div>
  );
};
export default OnlineCouses;

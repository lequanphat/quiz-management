import { Outlet } from 'react-router-dom';
import background from '../assets/background.png';
export const AuthLayout = () => {
  return (
    <div className=" flex w-[100vw] h-[100vh]">
      <div
        className="relative xl:w-[65%] lg:w-[60%] md:w-[50%] sm:w-[0] w-[0] h-[100vh] "
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hidden md:block absolute top-0 left-0 w-full h-full px-16 py-[20%] bg-black text-white opacity-30">
          <h1 className="text-[42px] font-bold ">
            Quiz - Hệ thống thi trắc nghiệm online
          </h1>
          <p className="my-2 text-[18px]">
            Một nền tảng giáo dục tương tác, cung cấp một cách thuận tiện và
            linh hoạt để tạo, quản lý và thực hiện các bài kiểm tra trực tuyến.
            Nó giúp giáo viên và học sinh tiết kiệm thời gian, tăng cường sự hợp
            tác và tạo điều kiện cho việc học tập liên tục mọi lúc, mọi nơi.
          </p>
        </div>
        <div className="hidden md:block absolute top-0 left-0 w-full h-full px-16 py-[20%] text-white ">
          <h1 className="text-[42px] font-bold ">
            Quiz - Hệ thống thi trắc nghiệm online
          </h1>
          <p className="my-2 text-[18px]">
            Một nền tảng giáo dục tương tác, cung cấp một cách thuận tiện và
            linh hoạt để tạo, quản lý và thực hiện các bài kiểm tra trực tuyến.
            Nó giúp giáo viên và học sinh tiết kiệm thời gian, tăng cường sự hợp
            tác và tạo điều kiện cho việc học tập liên tục mọi lúc, mọi nơi.
          </p>
        </div>
      </div>

      <div className="xl:w-[35%] lg:w-[40%] md:w-[50%] sm:w-full w-full p-12 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

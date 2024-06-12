import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="bg-white border-t-[1px] border-solid border-[#ccc]">
      <div className="p-16">
        <div className="grid grid-cols-4 gap-16">
          <div>
            <h1 className="text-[16px] font-semibold uppercase">
              VỀ CHÚNG TÔI
            </h1>
            <div className="py-2">
              <p>
                Quiz - Là một nền tảng giáo dục cung cấp một cách thuận tiện và
                linh hoạt để tạo, quản lý và thực hiện các bài kiểm tra trực
                tuyến giúp giáo viên và học sinh tiết kiệm thời gian và tạo điều
                kiện cho việc học tập liên tục mọi lúc, mọi nơi.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[16px] font-semibold uppercase">TÀI NGUYÊN</h1>
            <div className="py-2 ">
              <Link to="#" className="block mb-1 hover:text-primary">
                Thư viện đề thi
              </Link>
              <Link to="#" className="block mb-1 hover:text-primary">
                Kho tài liệu
              </Link>
              <Link to="#" className="block mb-1 hover:text-primary">
                Nhóm học tập
              </Link>
              <Link to="#" className="block mb-1 hover:text-primary">
                Bài viết
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-[16px] font-semibold uppercase">HỖ TRỢ</h1>
            <div className="py-2">
              <Link to="#" className="block mb-1 hover:text-primary">
                Hướng dẫn sử dụng
              </Link>
              <Link to="#" className="block mb-1 hover:text-primary">
                Đăng ký tài khoản giáo viên
              </Link>
              <Link to="#" className="block mb-1 hover:text-primary">
                Chăm sóc khách hàng
              </Link>
              <Link to="#" className="block mb-1 hover:text-primary">
                Phản hồi khiếu nại
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-[16px] font-semibold uppercase">LIÊN HỆ</h1>
            <div className="py-2">
              <Link to="#" className="block mb-1 hover:text-primary">
                Điện thoại: 0383 XXX XXX
              </Link>
              <Link to="#" className="block mb-1 hover:text-primary">
                Email: lequanphat3579@gmail.com
              </Link>
              <Link to="#" className="block mb-1 hover:text-primary">
                Địa chỉ: 180 Cao Lỗ, Phường 4, Quận 8, TP.HCM
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-slate-100">
        <p className="text-center">
          @ 2024 - Bản quyền của Công ty TNHH Công Nghệ Quiz
        </p>
      </div>
    </div>
  );
};

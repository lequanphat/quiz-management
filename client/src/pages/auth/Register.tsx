import { GoogleCredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/slice/authSlice';
import { Button } from '../../components/Button';

const Register = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  // handle
  const handleGoogleLogin = (credentialResponse: GoogleCredentialResponse) => {
    console.log(credentialResponse);
    dispatch(userLogin({ credential: credentialResponse.credential || '' }));
  };
  const handleGoogleLoginError = () => {
    console.log('Error');
  };
  // render
  return (
    <div className="p-4 rounded">
      <h1 className="text-[18px] font-bold uppercase">Đăng ký</h1>
      <p className="italic text-[#aaa]">Bắt đầu dùng thử 30 ngày miễn phí</p>
      <div className="py-4">
        <div className="py-2">
          <label htmlFor="username" className="font-medium text-[#444]">
            Họ tên
          </label>
          <input
            type="text"
            placeholder="Nguyễn Văn A"
            className="block border-[1px] border-solid border-[#ccc] w-full px-3 py-2 rounded-md my-1 focus:outline-none focus:border-[#333]"
          />
        </div>
        <div className="py-2">
          <label htmlFor="username" className="font-medium text-[#444]">
            Email
          </label>
          <input
            type="text"
            placeholder="nguyenvana@gmail.com"
            className="block border-[1px] border-solid border-[#ccc] w-full px-3 py-2 rounded-md my-1 focus:outline-none focus:border-[#333]"
          />
        </div>
        <div className="py-2">
          <label htmlFor="username" className="font-medium text-[#444]">
            Mật khẩu
          </label>
          <input
            type="password"
            placeholder="******"
            className="block border-[1px] border-solid border-[#ccc] w-full px-3 py-2 rounded-md my-1 focus:outline-none focus:border-[#333]"
          />
        </div>
        <div className="py-4">
          <Button text="Đăng ký" fullWidth styling="py-2" />
        </div>
        <div className="py-2 w-full">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={handleGoogleLoginError}
          />
        </div>
        <div className="pt-6">
          <p className="text-center text-[#444]">
            Bạn đã có tài khoản ?{' '}
            <a href="/auth/login" className="text-[#35509a]">
              Đăng nhập
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;

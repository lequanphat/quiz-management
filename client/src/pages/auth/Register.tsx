import { GoogleCredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { userGoogleLogin, userRegister } from '../../store/slice/authSlice';
import { Button } from '../../components/Button';
import { useFormik } from 'formik';
import { registerSchema } from '../../schemas/auth.schema';
import { useState } from 'react';

interface FormValues {
  displayName: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
  displayName: '',
};
const initialErrors: FormValues = {
  email: 'Vui lòng điền email của bạn.',
  password: 'Vui vòng điền mật khẩu của bạn.',
  displayName: 'Vui lòng điền họ tên của bạn.',
};

const Register = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [registerError, setRegisterError] = useState<any>('');
  const { values, errors, handleChange } = useFormik({
    initialValues,
    initialErrors,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
    },
  });
  // handle
  const handleGoogleLogin = (credentialResponse: GoogleCredentialResponse) => {
    console.log(credentialResponse);
    dispatch(
      userGoogleLogin({ credential: credentialResponse.credential || '' }),
    );
  };
  const handleGoogleLoginError = () => {
    console.log('Error');
  };

  // handle
  const handleRegister = async () => {
    // validate
    if (errors.displayName) {
      setRegisterError(errors.displayName);
      return;
    }
    if (errors.email) {
      setRegisterError(errors.email);
      return;
    }
    if (errors.password) {
      setRegisterError(errors.password);
      return;
    }
    setRegisterError('');
    // call api
    const data = {
      displayName: values.displayName,
      email: values.email,
      password: values.password,
    };
    const response = await dispatch(userRegister(data));
    if (response.error) {
      setRegisterError(response.payload.error);
    }
  };

  // render
  return (
    <div className="w-full p-4 rounded">
      <h1 className="text-[18px] font-bold uppercase">Đăng ký</h1>
      <p className="italic text-[#aaa]">Bắt đầu dùng thử 30 ngày miễn phí</p>
      <div className="py-4">
        <div className="py-2">
          <label htmlFor="username" className="font-medium text-[#444]">
            Họ tên
          </label>
          <input
            value={values.displayName}
            onChange={handleChange}
            name="displayName"
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
            value={values.email}
            onChange={handleChange}
            name="email"
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
            value={values.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="******"
            className="block border-[1px] border-solid border-[#ccc] w-full px-3 py-2 rounded-md my-1 focus:outline-none focus:border-[#333]"
          />
        </div>
        <div>
          <p className="text-error">{registerError}</p>
        </div>
        <div className="py-4">
          <Button
            text="Đăng ký"
            fullWidth
            styling="py-2"
            handle={handleRegister}
          />
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

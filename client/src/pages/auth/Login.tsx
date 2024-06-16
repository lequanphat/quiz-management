import { GoogleCredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { userGoogleLogin, userLogin } from '../../store/slice/authSlice';
import { Button } from '../../components/buttons/Button';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas/auth.schema';
import { useState } from 'react';

const initialValues = {
  email: '',
  password: '',
};
const initialErrors = {
  email: 'Vui lòng điền email của bạn.',
  password: 'Vui vòng điền mật khẩu của bạn.',
};

const Login = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [loginError, setLoginError] = useState<any>('');
  const { values, errors, handleChange } = useFormik({
    initialValues,
    initialErrors,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
    },
  });

  // handle

  const handleLogin = async () => {
    // validate
    if (errors.email) {
      setLoginError(errors.email);
      return;
    }
    if (errors.password) {
      setLoginError(errors.password);
      return;
    }
    setLoginError('');

    const data = {
      email: values.email,
      password: values.password,
    };
    const response = await dispatch(userLogin(data));
    if (response.error) {
      setLoginError(response.payload.error);
    }
  };

  const handleGoogleLogin = (credentialResponse: GoogleCredentialResponse) => {
    console.log(credentialResponse);
    dispatch(
      userGoogleLogin({ credential: credentialResponse.credential || '' }),
    );
  };
  const handleGoogleLoginError = () => {
    console.log('Error');
  };
  // render
  return (
    <div className="w-full p-4 rounded">
      <h1 className="text-[18px] font-bold uppercase">Đăng nhập</h1>
      <div className="py-4">
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
          <p className="text-error">{loginError}</p>
        </div>
        <div className="py-4">
          <Button
            text="Đăng nhập"
            fullWidth
            styling="py-2"
            handle={handleLogin}
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
            Bạn chưa có tài khoản ?{' '}
            <a href="/auth/register" className="text-[#35509a]">
              Đăng kí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;

import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/slice/authSlice';
import { Button } from '../../components/buttons/Button';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas/auth.schema';
import { useState } from 'react';
import { Input } from '../../components/inputs/Input';
import { GoogleLoginComponent } from '../../components/google/GoogleLoginComponent';

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
  // render
  return (
    <div className="w-full p-4 rounded">
      <h1 className="text-[18px] font-bold uppercase">Đăng nhập</h1>
      <div className="py-4">
        <Input
          id="username"
          label="Email"
          name="email"
          type="text"
          value={values.email}
          placeholder="nguyenvana@gmail.com"
          onChange={handleChange}
        />
        <Input
          id="password"
          label="Mật khẩu"
          name="password"
          type="password"
          value={values.password}
          placeholder="******"
          onChange={handleChange}
        />
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
        <GoogleLoginComponent />
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

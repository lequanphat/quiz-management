import { useState } from 'react';
import { Button } from '../../components/Button';
import { useFormik } from 'formik';
import { verifyEmailSchema } from '../../schemas/auth.schema';
import { useDispatch } from 'react-redux';
import { userVerifyAccount } from '../../store/slice/authSlice';
import { useNavigate, useParams } from 'react-router-dom';
const initialValues = {
  otp: '',
};
const initialErrors = {
  otp: 'Vui lòng điền mã OTP.',
};
const VerifyAccount = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [verifyError, setVerifyError] = useState<any>('');
  const { user_id } = useParams();
  const { values, errors, handleChange } = useFormik({
    initialValues,
    initialErrors,
    validationSchema: verifyEmailSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
    },
  });
  const handleVerifyAccount = async () => {
    if (errors.otp) {
      setVerifyError(errors.otp);
      return;
    }
    setVerifyError('');
    const data = {
      user_id: user_id || '',
      otp: values.otp,
    };
    const response = await dispatch(userVerifyAccount(data));
    if (response.error) {
      setVerifyError(response.payload.error);
    } else {
      navigate('/auth/login');
    }
  };
  return (
    <div className="w-full p-4 rounded">
      <h1 className="text-[18px] font-semibold uppercase text-center">
        XÁC NHẬN TÀI KHOẢN
      </h1>
      <div className="py-4">
        <div className="py-2">
          <label htmlFor="username" className="font-medium text-[#444]">
            OTP
          </label>
          <input
            value={values.otp}
            onChange={handleChange}
            name="otp"
            type="text"
            placeholder="6 kí tự số"
            className="block border-[1px] border-solid border-[#ccc] w-full px-3 py-2 rounded-md my-1 focus:outline-none focus:border-[#333]"
          />
        </div>
        <div>
          <p className="text-error">{verifyError}</p>
        </div>
        <div className="py-4">
          <Button
            text="Xác nhận"
            fullWidth
            styling="py-2"
            handle={handleVerifyAccount}
          />
        </div>
        <div className="pt-6">
          <p className="text-center text-[#444]">
            Gửi lại OTP ?
            <a href="#" className="text-[#35509a]">
              Gửi lại
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default VerifyAccount;

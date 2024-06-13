import * as yup from 'yup';

const emailValidation = yup
  .string()
  .email('Email không đúng định dạng.')
  .required('Vui lòng nhập email của bạn.');

const passwordValidation = yup
  .string()
  .min(6, 'Mật khẩu phải có it nhất 6 ký tự.')
  .max(20, 'Mật khẩu chỉ chứa tối đa 20 ký tự.')
  .matches(/^[a-zA-Z0-9]{6,20}$/, 'Mật khẩu chỉ chứa các ký tự chữ cái và số.')
  .required('Vui lòng nhập mật khẩu của bạn.');

const confirmPasswordValidation = yup
  .string()
  .oneOf([yup.ref('password')], 'Mật khẩu không khớp.')
  .required('Vui lòng xác nhận mật khẩu của bạn.');

const displayNameValidation = yup
  .string()
  .matches(
    /^[^!@#$%^&*()=0-9/\\}{_+;:"'><.,\][]+$/,
    'Tên không chứa ký tự đặc biệt và số.',
  )
  .min(8, 'Tên phải có ít nhất 8 ký')
  .max(20, 'Tên chỉ chứa tối đa 20 ký tự.')
  .test(
    'no-consecutive-spaces',
    'Tên không được chứa 2 khoảng trắng liên tiếp.',
    (value) => !/\s{2,}/.test(value ?? ''),
  );

export const loginSchema = yup.object({
  email: emailValidation,
  password: passwordValidation,
});

export const registerSchema = yup.object({
  email: emailValidation,
  password: passwordValidation,
  displayName: displayNameValidation,
});

export const forgotPasswordSchema = yup.object({
  email: emailValidation,
});
export const resetPasswordSchema = yup.object({
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
});

export const editProfileSchema = yup.object({
  displayName: displayNameValidation,
  about: yup.string().max(100, 'Giới thiệu chỉ chứa tối đa 100 ký tự.'),
});

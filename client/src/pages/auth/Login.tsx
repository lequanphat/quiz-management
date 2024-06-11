import { GoogleCredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/slice/authSlice';

const Login = () => {
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
    <div className="bg-slate-200 p-4 rounded">
      <h1 className="text-center font-medium">LOGIN</h1>
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={handleGoogleLoginError}
      />
    </div>
  );
};
export default Login;

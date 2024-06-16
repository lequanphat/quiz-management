import { GoogleCredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { userGoogleLogin } from '../../store/slice/authSlice';

export const GoogleLoginComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  const handleGoogleLogin = (credentialResponse: GoogleCredentialResponse) => {
    console.log(credentialResponse);
    dispatch(
      userGoogleLogin({ credential: credentialResponse.credential || '' }),
    );
  };
  const handleGoogleLoginError = () => {
    console.log('Error');
  };
  return (
    <div className="py-2 w-full flex justify-center">
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={handleGoogleLoginError}
        width={'100%'}
      />
    </div>
  );
};

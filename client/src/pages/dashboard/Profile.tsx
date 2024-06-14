import { useDispatch, useSelector } from 'react-redux';
import { ButtonType, StateType } from '../../types';
import { ChangeEvent, useState } from 'react';
import { Button } from '../../components/Button';
import { updateProfile } from '../../store/slice/authSlice';

const Profile = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  const { avatar } = useSelector((state: StateType) => state.auth);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [preview, setPreview] = useState<any>('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [avatarFile, setAvatarFile] = useState<any>('');

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('avatar', avatarFile, 'avatar.png');
    formData.append('displayName', 'Phát');
    dispatch(updateProfile(formData));
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setAvatarFile(file);
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreview('');
    }
  };

  return (
    <div className="p-12 flex gap-10 justify-center">
      <div
        className="w-[50%] bg-white p-4 border-[1px] border-solid border-[#e0e0e0] rounded-lg"
        style={{ boxShadow: '0 4px 0 0 rgba(143,156,173,.2)' }}
      >
        <h1 className="text-[18px] font-semibold">Thông tin cá nhân</h1>
        <div className="">
          <div className="py-4 flex items-center justify-center">
            <div
              className="w-[80px] h-[80px] rounded-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${preview || avatar})`,
              }}
            ></div>
          </div>
          <div>
            <input type="file" onChange={handleImageChange} />
            <Button
              text="Cập nhật ảnh đại diện"
              type={ButtonType.PRIMARY}
              handle={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

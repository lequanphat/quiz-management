import { useSelector } from 'react-redux';
import { StateType } from '../../types';
import { useState } from 'react';
import { Dropdow } from '../Dropdow';

export const Header = () => {
  const { avatar, displayName, email } = useSelector(
    (state: StateType) => state.auth,
  );
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);
  return (
    <header className="w-full p-1 bg-slate-200">
      <div className="flex items-center justify-between">
        <div></div>
        <div>
          <ul className="flex items-center gap-0">
            <li>
              <div className="text-end">
                <h2 className="text-[14px] font-semibold m-0">{displayName}</h2>
                <p className="text-[14px] m-0">{email}</p>
              </div>
            </li>
            <li
              className="relative p-1 mx-1 text-[#67a2e2] hover:text-[#35509a] cursor-pointer font-semibold lg:block hidden"
              onClick={() => {
                setIsShowDropdown(!isShowDropdown);
              }}
            >
              <div
                className="w-[40px] h-[40px] rounded-full border-2 border-solid border-[#ccc]"
                style={{
                  backgroundColor: '#f0f0f0',
                  backgroundImage: `url(${avatar})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <Dropdow show={isShowDropdown} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

import { Link } from 'react-router-dom';
import { ButtonType } from '../types';
import { ring2 } from 'ldrs';

ring2.register();

export const Button = ({
  text,
  to,
  type,
  fullWidth,
  uppercase,
  styling,
  isLoading,
  handle,
  ...props
}: {
  text: string;
  to?: string;
  type?: ButtonType;
  styling?: string;
  fullWidth?: boolean;
  uppercase?: boolean;
  isLoading?: boolean;
  handle?: () => void;
}) => {
  let styled = '';
  switch (type) {
    case ButtonType.PRIMARY:
      styled = 'bg-[#35509a] text-white hover:opacity-80';
      break;
    case ButtonType.SECONDARY:
      break;
    case ButtonType.OUTLINE:
      styled =
        'border-[1px] border-solid border-[#35509a] text-[#35509a] hover:bg-[#35509a] hover:text-white';
      break;
    case ButtonType.TEXT:
      styled = 'border-none font-semibold text-[#35509a] hover:opacity-80';
      break;
    default:
      styled = 'bg-[#35509a] text-white hover:opacity-80';
      break;
  }
  if (fullWidth) {
    styled += ' w-full';
  } else {
    styled += ' w-max';
  }
  if (uppercase) {
    styled += ' uppercase';
  }

  if (to) {
    return (
      <Link
        to={to}
        className={`block px-4 py-1 border-[1px] rounded-md 
            text-center cursor-pointer ${styled}`}
      >
        {text}
      </Link>
    );
  }
  return (
    <button
      {...props}
      onClick={handle}
      className={`px-4 py-2 border-[1px] rounded-md
           text-center cursor-pointer ${styled} ${styling}`}
    >
      <div className="flex items-center gap-2">
        {isLoading && (
          <l-ring-2
            size="26"
            stroke="3"
            stroke-length="0.25"
            bg-opacity="0.1"
            speed="0.8"
            color="white"
          ></l-ring-2>
        )}
        <p>{text}</p>
      </div>
    </button>
  );
};

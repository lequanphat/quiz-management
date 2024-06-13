import { Link } from 'react-router-dom';
import { ButtonType } from '../types';

export const Button = ({
  text,
  to,
  type,
  fullWidth,
  uppercase,
  styling,
  handle,
  ...props
}: {
  text: string;
  to?: string;
  type?: ButtonType;
  styling?: string;
  fullWidth?: boolean;
  uppercase?: boolean;
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
      className={`px-4 py-1 border-[1px] rounded-md
           text-center cursor-pointer ${styled} ${styling}`}
    >
      {text}
    </button>
  );
};

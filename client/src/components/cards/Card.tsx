import { ReactNode } from 'react';

export const Card = ({
  styling,
  children,
  padding,
}: {
  styling?: string;
  children: ReactNode;
  padding: number;
}) => {
  return (
    <div
      className={`w-full bg-white border-[1px] p-${padding} border-solid border-[#e0e0e0] rounded-lg 
 ${styling}`}
      style={{ boxShadow: '0 4px 0 0 rgba(143,156,173,.2)' }}
    >
      {children}
    </div>
  );
};

import { ReactNode } from 'react';

export const IconButton = ({ icon, ...props }: { icon: ReactNode }) => {
  return (
    <button
      {...props}
      className="p-2 hover:bg-slate-100 rounded-full text-slate-600"
    >
      {icon}
    </button>
  );
};

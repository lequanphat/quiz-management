import { ReactNode } from 'react';

export const Table = ({
  children,
  titles = [],
}: {
  children: ReactNode;
  titles: string[];
}) => {
  return (
    <table className="w-full text-center">
      <thead className="bg-blue-200">
        <tr>
          {titles.map((title, index) => (
            <th
              key={index}
              className="p-1 border-[1px] border-solid border-[#333]"
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  );
};

export const Row = ({ fields = [] }: { fields: string[] }) => {
  return (
    <tr>
      {fields.map((field, index) => (
        <td key={index} className="p-1 border-[1px] border-solid border-[#333]">
          {field}
        </td>
      ))}
    </tr>
  );
};

export const Input = ({
  id,
  label,
  name,
  type = 'text',
  value,
  placeholder,
  onChange,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="py-2">
      <label htmlFor={id} className="font-medium text-[#444]">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        className="block border-[1px] border-solid border-[#ccc] w-full px-3 py-2 rounded-md my-1 focus:outline-none focus:border-[#333]"
      />
    </div>
  );
};

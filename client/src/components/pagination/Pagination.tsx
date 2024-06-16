import { useDispatch } from 'react-redux';

export const Pagination = ({
  currentPage,
  totalPages,
  handle,
}: {
  currentPage: number;
  totalPages: number;
  handle: (page: number) => void;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();

  const handleSetPage = (page: number) => {
    dispatch(handle(page));
  };
  return (
    <div className="flex items-center justify-end gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => {
            handleSetPage(i + 1);
          }}
          className={`px-4 py-1 ${
            currentPage == i + 1
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-800'
          }  rounded-md cursor-pointer`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

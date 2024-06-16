import { IoCloseOutline } from 'react-icons/io5';
import { IconButton } from '../buttons/IconButton';
import { Button } from '../buttons/Button';
import { useDispatch } from 'react-redux';
import { createNewVocabulary } from '../../store/slice/vocabulariesSlice';
import { useState } from 'react';
export const AddVocabulary = ({ handleClose }: { handleClose: () => void }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  const [word, setWord] = useState<string>('');
  const [mean, setMean] = useState<string>('');
  // handle
  const handleAddVocabulary = () => {
    dispatch(createNewVocabulary({ word, mean }));
    handleClose();
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.35)] flex items-center justify-center">
      <div className="bg-white w-[450px] px-6 py-4 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-[16px] font-semibold">Thêm từ vựng mới</h1>
          <IconButton
            icon={<IoCloseOutline size={24} onClick={handleClose} />}
          />
        </div>
        <div>
          <div className="py-2">
            <label htmlFor="username" className="font-medium text-[#444]">
              Từ vựng
            </label>
            <input
              value={word}
              onChange={(e) => setWord(e.target.value)}
              name="word"
              type="text"
              placeholder=""
              className="block border-[1px] border-solid border-[#ccc] w-full px-3 py-2 rounded-md my-1 focus:outline-none focus:border-[#333]"
            />
          </div>
          <div className="py-2">
            <label htmlFor="username" className="font-medium text-[#444]">
              Ý nghĩa
            </label>
            <input
              value={mean}
              onChange={(e) => setMean(e.target.value)}
              name="word"
              type="text"
              placeholder=""
              className="block border-[1px] border-solid border-[#ccc] w-full px-3 py-2 rounded-md my-1 focus:outline-none focus:border-[#333]"
            />
          </div>
        </div>
        <div className="py-4">
          <Button text="Thêm từ vựng" fullWidth handle={handleAddVocabulary} />
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from 'react';
import { Button } from '../../components/buttons/Button';
import { AddVocabulary } from '../../components/dialogs/AddVocabulary';
import { useDispatch, useSelector } from 'react-redux';
import { getVocabularies } from '../../store/slice/vocabulariesSlice';
import { StateType } from '../../types';

const Vocabularies = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  const { vocabulariesList } = useSelector(
    (state: StateType) => state.vocabulary,
  );
  const [showAddVocabulary, setShowAddVocabulary] = useState<boolean>(false);

  //    handle
  const handleShowAddVocabulary = () => {
    setShowAddVocabulary(true);
  };
  const handleHideAddVocabulary = () => {
    setShowAddVocabulary(false);
  };
  //   effect
  useEffect(() => {
    dispatch(getVocabularies());
  }, [dispatch]);
  return (
    <div>
      {showAddVocabulary && (
        <AddVocabulary handleClose={handleHideAddVocabulary} />
      )}
      <div
        className="w-full bg-white p-4 border-[1px] border-solid border-[#e0e0e0] rounded-lg 
      flex items-center justify-between "
        style={{ boxShadow: '0 4px 0 0 rgba(143,156,173,.2)' }}
      >
        <h1 className="text-[22px] font-semibold">Từ vựng</h1>
        <div>
          <Button
            text="Thêm từ vựng mới"
            fullWidth
            handle={handleShowAddVocabulary}
          />
        </div>
      </div>
      <div
        className="w-full mt-4 bg-white p-4 border-[1px] border-solid border-[#e0e0e0] rounded-lg 
      flex items-center justify-between "
        style={{ boxShadow: '0 4px 0 0 rgba(143,156,173,.2)' }}
      >
        <table className="w-full text-center">
          <thead className="bg-blue-200">
            <tr>
              <th className="p-1 border-[1px] border-solid border-[#333]">#</th>
              <th className="p-1 border-[1px] border-solid border-[#333]">
                Từ vựng
              </th>
              <th className="p-1 border-[1px] border-solid border-[#333]">
                Ý nghĩa
              </th>
            </tr>
          </thead>
          <tbody>
            {vocabulariesList?.map((vocabulary, index) => (
              <tr key={index}>
                <td className="p-1 border-[1px] border-solid border-[#333]">
                  {vocabulary.id}
                </td>
                <td className="p-1 border-[1px] border-solid border-[#333]">
                  {vocabulary.word}
                </td>
                <td className="p-1 border-[1px] border-solid border-[#333]">
                  {vocabulary.mean}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Vocabularies;

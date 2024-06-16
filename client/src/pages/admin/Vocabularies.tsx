import { useEffect, useState } from 'react';
import { Button } from '../../components/buttons/Button';
import { AddVocabulary } from '../../components/dialogs/AddVocabulary';
import { useDispatch, useSelector } from 'react-redux';
import { getVocabularies } from '../../store/slice/vocabulariesSlice';
import { StateType } from '../../types';
import { Row, Table } from '../../components/tables/Table';
import { Card } from '../../components/cards/Card';

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
      <Card padding={4}>
        <h1 className="text-[22px] font-semibold">Từ vựng</h1>
        <div>
          <Button
            text="Thêm từ vựng mới"
            fullWidth
            handle={handleShowAddVocabulary}
          />
        </div>
      </Card>
      <Card padding={4} styling="my-6">
        <Table titles={['#', 'Từ vựng', 'Ý nghĩa']}>
          <tbody>
            {vocabulariesList?.map((vocabulary, index) => (
              <Row
                key={index}
                fields={[vocabulary.id, vocabulary.word, vocabulary.mean]}
              />
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};
export default Vocabularies;

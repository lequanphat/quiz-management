import { Button } from '../../components/buttons/Button';
import { Card } from '../../components/cards/Card';

const Vocabularies = () => {
  return (
    <div className="p-12">
      <Card padding={4} styling="flex-1">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-[22px] font-semibold">Từ vựng</h1>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Tìm kiếm từ vựng..."
              className="px-4 py-2 border-[1px] border-solid border-[#333] rounded-md outline-none"
            />
            <Button text="Tìm kiếm" />
          </div>
        </div>
      </Card>
      <Card padding={4} styling="my-6">
        <div className="">
          <h1 className="text-[22px] font-semibold">
            Kết quả tìm kiếm cho: Teacher
          </h1>
          <div className="">
            <p>Teacher: Giáo viên, giảng viên</p>
            <div>
              <h1>Các ví dụ</h1>
              <p>She is a teacher at a local school.</p>
              <p>He is a teacher of English.</p>
              <p>She is a teacher of mathematics.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Vocabularies;

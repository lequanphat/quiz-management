import { TestItem } from '../../section/tests/TestItem';

const OnlineTests = () => {
  return (
    <div className="p-12">
      <div>
        <h1 className="text-[24px] font-semibold">Thư viện đề thi</h1>
        <div className="flex items-center flex-wrap py-2">
          <div className="px-5 py-1 mr-2 text-[#35509a] bg-[#e8f2ff]  rounded-full">
            Tất cả
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full">
            TOEIC
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full">
            IELTS
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full">
            HSK 1
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full">
            HSK 2
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full">
            HSK 3
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full">
            HSK 4
          </div>
        </div>

        <div className="px-2 py-6 grid grid-cols-5 gap-6">
          <TestItem />
          <TestItem />
          <TestItem />
          <TestItem />
          <TestItem />
          <TestItem />
          <TestItem />
        </div>
      </div>
    </div>
  );
};
export default OnlineTests;

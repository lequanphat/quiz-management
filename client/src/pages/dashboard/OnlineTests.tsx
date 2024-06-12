import { TestItem } from '../../section/tests/TestItem';

const OnlineTests = () => {
  return (
    <div className="p-12">
      <div>
        <h1 className="text-[24px] font-semibold">Thư viện đề thi</h1>
        <div className="flex items-center flex-wrap py-2">
          <div className="px-5 py-1 mr-2 text-[#35509a] bg-[#e8f2ff]  rounded-full cursor-pointer">
            Tất cả
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            TOEIC
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            IELTS
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            HSK 1
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            HSK 2
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            HSK 3
          </div>
          <div className="px-5 py-1 mr-2 hover:bg-[#e7eaf3] rounded-full cursor-pointer">
            HSK 4
          </div>
        </div>

        <div className="py-6 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6">
          <TestItem
            title="Lập trình web và ứng dụng nâng cao"
            duration={60}
            comments={1455}
            joined={24}
            parts={7}
            questions={200}
            tags={['CNTT']}
          />
          <TestItem
            title="Lập trình Python"
            duration={60}
            comments={1455}
            joined={24}
            parts={7}
            questions={200}
            tags={['CNTT', 'KTPM']}
          />
          <TestItem
            title="Cấu trúc dữ liệu và giải thuật"
            duration={60}
            comments={1455}
            joined={24}
            parts={7}
            questions={200}
            tags={['CNTT']}
          />
          <TestItem
            title="Cơ sở trí tuệ nhân tạo"
            duration={60}
            comments={1455}
            joined={24}
            parts={7}
            questions={200}
            tags={['CNTT']}
          />
          <TestItem
            title="Hệ thống thông tin doanh nghiệp"
            duration={60}
            comments={1455}
            joined={24}
            parts={7}
            questions={200}
            tags={['CNTT']}
          />
        </div>
      </div>
    </div>
  );
};
export default OnlineTests;

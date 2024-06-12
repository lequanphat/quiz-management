import {
  IoChatbubbleEllipsesOutline,
  IoPersonOutline,
  IoTimerOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

const TestDetails = () => {
  return (
    <div className="p-12 ">
      <div
        className="p-4 border-[1px] border-solid border-[#e0e0e0] rounded-lg"
        style={{ boxShadow: '0 4px 0 0 rgba(143,156,173,.2)' }}
      >
        <div className="py-2 flex items-center flex-wrap gap-2">
          <div className="px-4 py-1 bg-[#eee] rounded-full text-[14px]">
            #TOEIC
          </div>
          <div className="px-4 py-1 bg-[#eee] rounded-full text-[14px]">
            #TOEIC
          </div>
          <div className="px-4 py-1 bg-[#eee] rounded-full text-[14px]">
            #TOEIC
          </div>
        </div>
        <h1 className="text-[24px] font-bold">
          Practice Set 2023 TOEIC Test 10
        </h1>
        <div className="py-2 flex items-center flex-wrap gap-2">
          <div className="flex items-center gap-1">
            <span>
              <IoTimerOutline />
            </span>
            <span>Thòi gian làm bài: 120 phút |</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <IoTimerOutline />
            </span>
            <span>7 phần thi |</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <IoTimerOutline />
            </span>
            <span>200 câu hỏi |</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <IoPersonOutline />
            </span>
            <span>55120 người đã luyện tập đề thi này |</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <IoChatbubbleEllipsesOutline />
            </span>
            <span>55120 bình luận</span>
          </div>
        </div>
        <div className="py-2">
          <h2 className="text-[16px] font-bold">Kết quả làm bài của bạn</h2>
          <div className="py-2">
            <table className="">
              <tr>
                <th className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  Ngày làm
                </th>
                <th className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  Phần làm
                </th>
                <th className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  Kết quả
                </th>
                <th className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  Thời gian làm bài
                </th>
                <th className="px-4 py-1 border-[1px] border-solid border-[#333] text-center"></th>
              </tr>
              <tr>
                <td className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  23/05/2024
                </td>
                <td className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  <div className="p-2 flex flex-wrap gap-2">
                    <div className="bg-[#e8f2ff] px-4 py-[1] text-[#35509a] rounded-full font-semibold">
                      Part 1
                    </div>
                    <div className="bg-[#e8f2ff] px-4 py-[1] text-[#35509a] rounded-full font-semibold">
                      Part 2
                    </div>
                  </div>
                </td>
                <td className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  23/30
                </td>
                <td className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  0:30:34
                </td>
                <td className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  <Link to="#" className="text-[#35509a]">
                    Xem chi tiết
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  23/05/2024
                </td>
                <td className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  <div className="p-2 flex flex-wrap gap-2">
                    <div className="bg-[#e8f2ff] px-4 py-[1] text-[#35509a] rounded-full font-semibold">
                      Part 1
                    </div>
                    <div className="bg-[#e8f2ff] px-4 py-[1] text-[#35509a] rounded-full font-semibold">
                      Part 2
                    </div>
                    <div className="bg-[#e8f2ff] px-4 py-[1] text-[#35509a] rounded-full font-semibold">
                      Part 3
                    </div>
                    <div className="bg-[#e8f2ff] px-4 py-[1] text-[#35509a] rounded-full font-semibold">
                      Part 4
                    </div>
                  </div>
                </td>
                <td className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  23/30
                </td>
                <td className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  0:30:34
                </td>
                <td className="px-4 py-1 border-[1px] border-solid border-[#333] text-center">
                  <Link to="#" className="text-[#35509a]">
                    Xem chi tiết
                  </Link>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="py-2">
          <h2 className="text-[16px] font-bold">Chọn phần bạn muốn làm</h2>
          <div className="py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-[15px] h-[15px]"
                type="checkbox"
                name="123"
                id="part1"
              />
              <label htmlFor="part1">Part 1 (40 câu)</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="w-[15px] h-[15px]"
                type="checkbox"
                name="123"
                id="part1"
              />
              <label htmlFor="part1">Part 2 (50 câu)</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="w-[15px] h-[15px]"
                type="checkbox"
                name="123"
                id="part1"
              />
              <label htmlFor="part1">Part 3 (30 câu)</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="w-[15px] h-[15px]"
                type="checkbox"
                name="123"
                id="part1"
              />
              <label htmlFor="part1">Part 4 (10 câu)</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="w-[15px] h-[15px]"
                type="checkbox"
                name="123"
                id="part1"
              />
              <label htmlFor="part1">Part 5 (60 câu)</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="w-[15px] h-[15px]"
                type="checkbox"
                name="123"
                id="part1"
              />
              <label htmlFor="part1">Làm full test (120 câu)</label>
            </div>
            <div className="pt-4">
              <Button text="Luyện tập" to="practice" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-6 p-4 border-[1px] border-solid border-[#e0e0e0] rounded-lg"
        style={{ boxShadow: '0 4px 0 0 rgba(143,156,173,.2)' }}
      >
        <h2 className="text-[16px] font-bold">Bình luận</h2>
      </div>
    </div>
  );
};
export default TestDetails;

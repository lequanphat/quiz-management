import {
  IoChatbubbleEllipsesOutline,
  IoPersonOutline,
  IoTimerOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const TestItem = () => {
  return (
    <div
      className="p-4 border-[1px] border-solid border-[#e0e0e0] rounded-lg"
      style={{ boxShadow: '0 4px 0 0 rgba(143,156,173,.2)' }}
    >
      <h2 className="font-bold">IELTS Simulation Listening test 1</h2>
      <div className="py-1 flex items-center flex-wrap gap-x-2">
        <div className="flex items-center gap-1">
          <span>
            <IoTimerOutline />
          </span>
          <span>120 phút |</span>
        </div>
        <div className="flex items-center gap-1">
          <span>
            <IoPersonOutline />
          </span>
          <span>12105 |</span>
        </div>
        <div className="flex items-center gap-1">
          <span>
            <IoChatbubbleEllipsesOutline />
          </span>
          <span>120 phút</span>
        </div>
      </div>
      <div className="py-1 flex items-center flex-wrap gap-2">
        <span>7 phần thi |</span>
        <span>200 câu hỏi</span>
      </div>
      <div className="py-2 flex items-center flex-wrap gap-2">
        <div className="px-4 py-1 text-[#35509a] bg-[#f0f8ff] rounded-full font-semibold text-[14px]">
          #TOEIC
        </div>
        <div className="px-4 py-1 text-[#35509a] bg-[#f0f8ff] rounded-full font-semibold text-[14px]">
          #IELTS
        </div>
      </div>
      <div className="w-full mt-4">
        <Link
          to={`${Math.floor(Math.random() * 10)}`}
          className="block w-full px-4 py-1 rounded-md text-center border-[1px] border-solid border-[#35509a] text-[#35509a]
                 hover:bg-[#35509a] hover:text-white font-semibold"
        >
          Chi tiết
        </Link>
      </div>
    </div>
  );
};

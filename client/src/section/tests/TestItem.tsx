import {
  IoChatbubbleEllipsesOutline,
  IoPersonOutline,
  IoTimerOutline,
} from 'react-icons/io5';
import { Button } from '../../components/Button';
import { ButtonType } from '../../types';

export const TestItem = ({
  title,
  duration,
  joined,
  comments,
  parts,
  questions,
  tags,
}: {
  title: string;
  duration: number;
  joined: number;
  comments: number;
  parts: number;
  questions: number;
  tags: string[];
}) => {
  return (
    <div
      className="h-[260px] flex flex-col justify-between p-4 border-[1px] border-solid border-[#e0e0e0] rounded-lg"
      style={{ boxShadow: '0 4px 0 0 rgba(143,156,173,.2)' }}
    >
      <div>
        <h2 className="font-bold line-clamp-2">{title} </h2>
        <div className="py-1 flex items-center flex-wrap gap-x-2">
          <div className="flex items-center gap-1">
            <span>
              <IoTimerOutline />
            </span>
            <span>{duration} phút |</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <IoPersonOutline />
            </span>
            <span>{joined} |</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <IoChatbubbleEllipsesOutline />
            </span>
            <span>{comments}</span>
          </div>
        </div>
        <div className="py-1 flex items-center flex-wrap gap-2">
          <span>{parts} phần thi |</span>
          <span>{questions} câu hỏi</span>
        </div>
        <div className="py-2 flex items-center flex-wrap gap-2">
          {tags.map((tag) => (
            <div className="px-4 py-1 text-[#35509a] bg-[#f0f8ff] rounded-full font-semibold text-[12px]">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-4">
        <Button
          text="Làm bài"
          to={`${Math.floor(Math.random() * 10)}`}
          type={ButtonType.OUTLINE}
          fullWidth
        />
      </div>
    </div>
  );
};

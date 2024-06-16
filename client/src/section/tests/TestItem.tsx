import {
  IoChatbubbleEllipsesOutline,
  IoPersonOutline,
  IoTimerOutline,
} from 'react-icons/io5';
import { Button } from '../../components/buttons/Button';
import { ButtonType } from '../../types';
import { Card } from '../../components/cards/Card';

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
    <Card padding={4} styling="h-[260px] flex flex-col justify-between">
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
          text="Xem chi tiết"
          to={`${Math.floor(Math.random() * 10)}`}
          type={ButtonType.OUTLINE}
          fullWidth
        />
      </div>
    </Card>
  );
};

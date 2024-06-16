import {
  IoChatbubbleEllipsesOutline,
  IoPersonOutline,
  IoTimerOutline,
} from 'react-icons/io5';
import { Button } from '../../components/buttons/Button';
import { ButtonType } from '../../types';

export const CourseItem = ({
  image,
  title,
  duration,
  joined,
  comments,
}: {
  image: string;
  title: string;
  duration: number;
  joined: number;
  comments: number;
}) => {
  return (
    <div
      className="h-[360px] flex flex-col justify-between border-[1px] border-solid border-[#e0e0e0] rounded-lg overflow-hidden"
      style={{ boxShadow: '0 4px 0 0 rgba(143,156,173,.2)' }}
    >
      <div>
        <div
          className="w-full h-[160px]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="p-4">
          <h2 className="font-bold line-clamp-2">{title} </h2>
          <div className="py-1 flex items-center flex-wrap gap-x-2">
            <div className="flex items-center gap-1">
              <span>
                <IoTimerOutline />
              </span>
              <span>{duration} bài giảng |</span>
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
          <div className="py-2 flex items-center gap-4">
            <p className="text-[18px] font-semibold text-[red]">999.000đ</p>
            <del className="text-[18px] font-semibold text-[#aaa]">
              1.199.000đ
            </del>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <Button
          text="Xem chi tiết"
          to={`${Math.floor(Math.random() * 10)}`}
          type={ButtonType.OUTLINE}
          fullWidth
        />
      </div>
    </div>
  );
};

import { Button } from '../../components/Button';
import { TestQuestion } from '../../components/Question';
import { ButtonType } from '../../types';

const PracticeTest = () => {
  return (
    <div className="p-12 flex gap-10">
      <div
        className="fixed z-[998] top-[110px] right-12 w-[280px] bg-white p-4 border-[1px] border-solid border-[#e0e0e0] rounded-lg"
        style={{ boxShadow: '0 4px 0 0 rgba(143,156,173,.2)' }}
      >
        <h4>Thời gian làm bài </h4>
        <h1 className="text-[22px] font-bold">01:46</h1>
        <div className="py-2">
          <Button
            text="Nộp bài"
            type={ButtonType.PRIMARY}
            fullWidth
            uppercase
          />
        </div>
        <div className="py-2">
          <h2 className="text-[18px] font-semibold">Part 5</h2>
          <div className="py-2 grid grid-cols-5 gap-2">
            <Button text="1" type={ButtonType.OUTLINE} fullWidth />
            <Button text="2" type={ButtonType.OUTLINE} fullWidth />
            <Button text="3" type={ButtonType.OUTLINE} fullWidth />
            <Button
              text="4"
              type={ButtonType.OUTLINE}
              fullWidth
              to="#question-4"
            />
            <Button text="5" type={ButtonType.OUTLINE} fullWidth />
            <Button text="6" type={ButtonType.OUTLINE} fullWidth />
            <Button text="7" type={ButtonType.OUTLINE} fullWidth />
            <Button text="8" type={ButtonType.OUTLINE} fullWidth />
            <Button text="9" type={ButtonType.OUTLINE} fullWidth />
            <Button text="10" type={ButtonType.OUTLINE} fullWidth />
          </div>
        </div>
        <div className="py-2">
          <h2 className="text-[18px] font-semibold">Part 7</h2>
          <div className="py-2 grid grid-cols-5 gap-2">
            <Button text="1" type={ButtonType.OUTLINE} fullWidth />
            <Button text="2" type={ButtonType.OUTLINE} fullWidth />
            <Button text="3" type={ButtonType.OUTLINE} fullWidth />
            <Button text="4" type={ButtonType.OUTLINE} fullWidth />
            <Button text="5" type={ButtonType.OUTLINE} fullWidth />
            <Button text="6" type={ButtonType.OUTLINE} fullWidth />
            <Button text="7" type={ButtonType.OUTLINE} fullWidth />
            <Button text="8" type={ButtonType.OUTLINE} fullWidth />
            <Button text="9" type={ButtonType.OUTLINE} fullWidth />
            <Button text="10" type={ButtonType.OUTLINE} fullWidth />
            <Button text="11" type={ButtonType.OUTLINE} fullWidth />
            <Button text="12" type={ButtonType.OUTLINE} fullWidth />
          </div>
        </div>
      </div>
      <div
        className="flex-1 p-4 border-[1px] border-solid border-[#e0e0e0] rounded-lg"
        style={{ boxShadow: '0 4px 0 0 rgba(143,156,173,.2)' }}
      >
        <h1 className="py-2 text-[22px] font-bold text-center">
          Đề thi Lập trình Web và Ứng dụng nâng cao 2024 - Đại Học Sài Gòn
        </h1>
        <div>
          <TestQuestion
            id="1"
            question="Lệnh nào sau đây dùng để in ra màn hình console trong Javascript?"
            answers={[
              { id: 'A', content: 'print()' },
              { id: 'B', content: 'console.log()' },
              { id: 'C', content: 'echo()' },
              { id: 'D', content: 'System.out.println()' },
            ]}
          />
          <TestQuestion
            id="2"
            question="Cho biết lệnh alert('Hello World!') dùng để làm gì trong Javascript?"
            answers={[
              {
                id: 'A',
                content:
                  'Hiển thị thông báo Hello World lên màn hình trình duyệt.',
              },
              { id: 'B', content: 'Xóa kí tự Hello World trên màn hình.' },
              { id: 'C', content: 'Yêu cầu nhập kí tự Hello World.' },
              { id: 'D', content: 'Câu lệnh không hợp lệ trong Javascript' },
            ]}
          />
          <TestQuestion
            id="3"
            question="Lệnh nào sau đây dùng để in ra màn hình 'Hello World!' trong Python?"
            answers={[
              {
                id: 'A',
                content: 'cout << "Hello World!" << endl;',
              },
              { id: 'B', content: "console.log('Hello World!')" },
              { id: 'C', content: 'print("Hello World!"' },
              { id: 'D', content: 'echo "Hello World!"' },
            ]}
          />
          <TestQuestion
            id="4"
            question="Lệnh nào sau đây dùng để in ra màn hình 'Hello World!' trong Python?"
            answers={[
              {
                id: 'A',
                content: 'cout << "Hello World!" << endl;',
              },
              { id: 'B', content: "console.log('Hello World!')" },
              { id: 'C', content: 'print("Hello World!"' },
              { id: 'D', content: 'echo "Hello World!"' },
            ]}
          />
          <TestQuestion
            id="5"
            question="Lệnh nào sau đây dùng để in ra màn hình 'Hello World!' trong Python?"
            answers={[
              {
                id: 'A',
                content: 'cout << "Hello World!" << endl;',
              },
              { id: 'B', content: "console.log('Hello World!')" },
              { id: 'C', content: 'print("Hello World!"' },
              { id: 'D', content: 'echo "Hello World!"' },
            ]}
          />
        </div>
      </div>
      <div className="w-[280px]"></div>
    </div>
  );
};
export default PracticeTest;

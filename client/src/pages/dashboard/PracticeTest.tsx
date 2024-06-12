import { AnswerType } from '../../types';

const PracticeTest = () => {
  return (
    <div className="p-12 flex gap-10">
      <div
        className="fixed top-[110px] right-12 w-[320px] bg-white p-4 border-[1px] border-solid border-[#e0e0e0] rounded-lg"
        style={{ boxShadow: '0 4px 0 0 rgba(143,156,173,.2)' }}
      >
        <h4>Thời gian làm bài </h4>
        <h1 className="text-[22px] font-bold">01:46</h1>
        <button
          className="my-2 uppercase w-full px-4 py-1 border-[1px] border-solid border-[#35509a] text-[#35509a] rounded-md
        hover:bg-[#35509a] hover:text-white"
        >
          Nộp bài
        </button>
        <div className="py-2">
          <h2 className="text-[18px] font-semibold">Part 5</h2>
          <div className="py-2 grid grid-cols-5 gap-1">
            <QuestionButton id="1" />
            <QuestionButton id="2" />
            <QuestionButton id="3" />
            <QuestionButton id="4" />
            <QuestionButton id="5" />
            <QuestionButton id="6" />
            <QuestionButton id="7" />
            <QuestionButton id="8" />
            <QuestionButton id="9" />
            <QuestionButton id="10" />
          </div>
        </div>
        <div className="py-2">
          <h2 className="text-[18px] font-semibold">Part 7</h2>
          <div className="py-2 grid grid-cols-5 gap-1">
            <QuestionButton id="1" />
            <QuestionButton id="2" />
            <QuestionButton id="3" />
            <QuestionButton id="4" />
            <QuestionButton id="5" />
            <QuestionButton id="6" />
            <QuestionButton id="7" />
            <QuestionButton id="8" />
            <QuestionButton id="9" />
            <QuestionButton id="10" />
            <QuestionButton id="11" />
            <QuestionButton id="12" />
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
        </div>
      </div>
      <div className="w-[320px]"></div>
    </div>
  );
};
export default PracticeTest;

export const TestQuestion = ({
  id,
  question,
  answers,
}: {
  id: string;
  question: string;
  answers: AnswerType[];
}) => {
  return (
    <div className="py-2">
      <div className="flex items-center gap-2">
        <div className="w-[38px] h-[38px] bg-[#e8f2ff] text-[#35509a] rounded-full flex items-center justify-center">
          {id}
        </div>
        <p className="font-medium">{question}</p>
      </div>
      <div className="py-2">
        {answers.map((answer: AnswerType) => (
          <TestAnswer
            question_id={id}
            id={answer.id}
            content={answer.content}
          />
        ))}
      </div>
    </div>
  );
};

export const TestAnswer = ({
  question_id,
  id,
  content,
}: {
  question_id: string;
  id: string;
  content: string;
}) => {
  return (
    <div className="py-1 flex items-center gap-2">
      <input
        className="answer-radio"
        type="radio"
        id={`${question_id}-${id}`}
        name={question_id}
        value={id}
      />
      <label
        htmlFor={`${question_id}-${id}`}
        className="anwer-instance w-[32px] h-[32px] rounded-full flex items-center justify-center border-[1px] border-solid border-[#ccc]"
      >
        {id}
      </label>
      <label htmlFor={`${question_id}-${id}`}>{content}</label>
    </div>
  );
};

export const QuestionButton = ({ id }: { id: string }) => {
  return (
    <div
      className="border-[1px] border-solid border-[#35509a] text-[#35509a] flex
            items-center justify-center rounded-md cursor-pointer hover:bg-[#35509a] hover:text-white"
    >
      {id}
    </div>
  );
};

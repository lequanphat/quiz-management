import { AnswerType } from '../types';

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

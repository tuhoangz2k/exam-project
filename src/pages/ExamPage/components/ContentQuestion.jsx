import React from 'react';
import ButtonComp from '../../../components/Button';
import AnswerContent from './AnswerContent';
import { AnswerWrapper, QuestionTitle, Wrapper } from './ContentQuestion.styled';

function ContentQuestion({ data, onChanceQuestion, currentIndex, totalLength }) {
  const handleChange = (newIdx) => {
    if (onChanceQuestion) onChanceQuestion(newIdx);
  };

  return (
    <Wrapper>
      <QuestionTitle>
        Câu {currentIndex + 1}: {data?.title}
      </QuestionTitle>
      {data?.answers?.map((answer, index) => (
        <AnswerContent key={index} label={answer.description} index={index} />
      ))}
      <AnswerWrapper>
        <ButtonComp
          bg="#EEE7A9"
          width="120px"
          height="50px"
          onClick={() => {
            if (currentIndex === 0) return;
            handleChange(currentIndex - 1);
          }}
        >
          Câu trước
        </ButtonComp>
        <ButtonComp
          bg="#EEE7A9"
          width="120px"
          height="50px"
          onClick={() => {
            if (currentIndex === totalLength - 1) return;
            handleChange(currentIndex + 1);
          }}
        >
          Câu sau
        </ButtonComp>
      </AnswerWrapper>
    </Wrapper>
  );
}

export default ContentQuestion;

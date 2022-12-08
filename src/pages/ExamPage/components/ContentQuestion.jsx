import React from 'react';
import ButtonComp from '../../../components/Button';
import AnswerContent from './AnswerContent';
import { AnswerWrapper, QuestionTitle, Wrapper } from './ContentQuestion.styled';
const answers = [
  ' 12 ngày nếu làm đủ cả năm',
  ' 16 ngày nếu làm đủ cả năm',
  ' Không có nghỉ phép vẫn hưởng lương',
  ' 8 ngày nếu làm đủ cả năm',
];
function ContentQuestion() {
  return (
    <Wrapper>
      <QuestionTitle>
        Câu 3. Nhân viên chính thức của công ty Amela được nghỉ phép (có hưởng lương) bao
        nhiêu ngày một năm?
      </QuestionTitle>
      {answers.map((answer, index) => (
        <AnswerContent key={index} label={answer} index={index} />
      ))}
      <AnswerWrapper>
        <ButtonComp bg="#EEE7A9" width="120px" height="50px">
          Câu trước
        </ButtonComp>
        <ButtonComp bg="#EEE7A9" width="120px" height="50px">
          Câu sau
        </ButtonComp>
      </AnswerWrapper>
    </Wrapper>
  );
}

export default ContentQuestion;

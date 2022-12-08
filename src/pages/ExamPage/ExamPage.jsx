import React, { useState } from 'react';
import ProgressComp from '../../components/ProgressComp/ProgressComp';
import ContentQuestion from './components/ContentQuestion';
import Header from '../../components/Header';
import {
  CompletedBtn,
  CountTime,
  ExamQuestionChangeBtn,
  ExamQuestionHead,
  ExamQuestionListWrap,
  ExamQuestionWrap,
  ExamWrapper,
  Title,
  Wrap,
} from './ExamPage.styled';
import { Modal } from '../../components/Header/Header.styled';

const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function ExamPage() {
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  console.log(isOpenMenu);
  return (
    <>
      <Header content="Làm bài thi" setIsOpenMenu={setIsOpenMenu} />
      <ExamWrapper>
        <ExamQuestionWrap>
          <ExamQuestionHead>
            <Title>Kiểm tra an toàn bảo mật thông tin lần 2</Title>
            <CountTime>Con lai:14 phut 22 giay</CountTime>
            <ProgressComp bg="#41C54E" percent={90} />
          </ExamQuestionHead>
          <ContentQuestion />
        </ExamQuestionWrap>

        <ExamQuestionListWrap isOpen={isOpenMenu}>
          <Wrap>
            {questions.map((item, index) => (
              <ExamQuestionChangeBtn key={index}>{item}</ExamQuestionChangeBtn>
            ))}
          </Wrap>
          <CompletedBtn>Nộp bài</CompletedBtn>
        </ExamQuestionListWrap>
      </ExamWrapper>
      <Modal isOpen={isOpenMenu} onClick={() => setIsOpenMenu(false)} />
    </>
  );
}

export default ExamPage;

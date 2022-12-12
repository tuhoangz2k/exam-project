import React, { useEffect, useState } from 'react';
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
import { useLocation, useParams } from 'react-router-dom';
import { getExam } from '../../hooks/common';

const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function ExamPage() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    setData(getExam(params?.examId));
  }, [params]);
  let counter = data?.time * 360;

  // console.log(data);
  // console.log(counter);
  const nowDate = new Date();
  console.log(nowDate);
  return (
    <>
      <Header content="Làm bài thi" setIsOpenMenu={setIsOpenMenu} />
      <ExamWrapper>
        <ExamQuestionWrap>
          <ExamQuestionHead>
            <Title>{data.describe}</Title>
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

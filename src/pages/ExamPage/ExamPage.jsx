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
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getExam } from '../../hooks/common';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../app/reduxSelector';
import { addAnswer, setIsFinish } from '../Finish/finishSlice';

function ExamPage() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState({});
  const isLogin = useSelector(selectUser).userId;
  const params = useParams();
  const dispatch = useDispatch();
  const navigated = useNavigate();
  const handleAddAnswer = (value) => {
    dispatch(addAnswer(value));
  };
  useEffect(() => {
    setData(getExam(params?.examId));
    const questionIdx = data?.questions?.findIndex(
      (question) => question.id === params?.questionId,
    );
    setCurrentIndex(questionIdx);
  }, [params, data]);
  const handleChangeQuestion = (newQuestionIdx) => {
    navigated(
      `/exam/${params?.examId}/question/${data?.questions?.[newQuestionIdx]?.id}`,
    );
  };

  const handleFinishExam = () => {
    dispatch(setIsFinish(true));
    navigated('/finish');
  };
  if (!isLogin) return <Navigate to="/login" />;
  let counter = data?.time * 360;
  // console.log(counter);
  // const nowDate = new Date();
  // console.log(nowDate);
  return (
    <>
      <Header content="Làm bài thi" setIsOpenMenu={setIsOpenMenu} />
      <ExamWrapper>
        <ExamQuestionWrap>
          <ExamQuestionHead>
            <Title> {data.describe}</Title>
            <CountTime>Con lai:14 phut 22 giay</CountTime>
            <ProgressComp bg="#41C54E" percent={90} />
          </ExamQuestionHead>
          <ContentQuestion
            data={data?.questions?.[currentIndex]}
            onChanceQuestion={handleChangeQuestion}
            currentIndex={currentIndex}
            totalLength={data.questions?.length}
            handleAddAnswer={handleAddAnswer}
          />
        </ExamQuestionWrap>

        <ExamQuestionListWrap isOpen={isOpenMenu}>
          <Wrap>
            {data?.questions?.map((_, index) => (
              <ExamQuestionChangeBtn
                key={index}
                onClick={() => handleChangeQuestion(index)}
                style={{ backgroundColor: index === currentIndex ? '#92FD9D' : '' }}
              >
                {index + 1}
              </ExamQuestionChangeBtn>
            ))}
          </Wrap>
          <CompletedBtn onClick={handleFinishExam}>Nộp bài</CompletedBtn>
        </ExamQuestionListWrap>
      </ExamWrapper>
      <Modal isOpen={isOpenMenu} onClick={() => setIsOpenMenu(false)} />
    </>
  );
}

export default ExamPage;

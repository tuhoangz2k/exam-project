import React, { useEffect, useMemo, useRef, useState } from 'react';
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
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getExam } from '../../hooks/common';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAnswerList,
  selectAnswersQuestion,
  selectUser,
} from '../../app/reduxSelector';
import { addAnswer, setFinishTime, setIsFinish } from '../Finish/finishSlice';
import { checkLogin } from '../../hooks';
import { useCountdown } from '../../hooks/useCountdown';

function ExamPage() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState({});
  const hasData = useRef(false);
  const isLogin = useSelector(selectUser).userId;
  const params = useParams();

  const dispatch = useDispatch();
  const navigated = useNavigate();
  const checkedList = useSelector(selectAnswersQuestion);
  const answerList = useSelector(selectAnswerList);
  const finishTime = useMemo(
    () => JSON.parse(localStorage.getItem('examStartInfo')).finishTime,
    [],
  );
  const [days, hours, minutes, seconds] = useCountdown(answerList.finishTime);
  const handleAddAnswer = (value) => {
    dispatch(addAnswer(value));
  };
  // console.log(Date.toString(1670926043534));
  useEffect(() => {
    if (hasData.current === false) hasData.current = true;
    setData(getExam(params?.examId));
    const questionIdx = data?.questions?.findIndex(
      (question) => question.id === params?.questionId,
    );
    setCurrentIndex(questionIdx);
  }, [params, data]);

  const [percent, setPercent] = useState(0);
  // console.log(timer);
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const now = new Date().getTime();
    const timeout = now - answerList.startTime;
    const per = Math.trunc(
      (timeout / (answerList.finishTime - answerList.startTime)) * 100,
    );
    setPercent((prev) => per);
  }, [seconds]);
  if (seconds <= 0 && minutes <= 0) {
    dispatch(setIsFinish(true));
    navigated('/finish');
  }
  return (
    <>
      <Header content="Làm bài thi" setIsOpenMenu={setIsOpenMenu} />
      <ExamWrapper>
        <ExamQuestionWrap>
          <ExamQuestionHead>
            <Title> {data.describe}</Title>
            <CountTime>
              Con lai:{minutes} phut {seconds} giay
            </CountTime>
            <ProgressComp bg="#41C54E" percent={percent} />
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
            {data?.questions?.map((question, index) => (
              <ExamQuestionChangeBtn
                key={index}
                onClick={() => handleChangeQuestion(index)}
                style={{ backgroundColor: index === currentIndex ? '#92FD9D' : '' }}
                isChecked={checkedList[question.id]}
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

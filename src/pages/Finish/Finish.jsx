import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { selectUser, selectAnswerList, computedPoint } from '../../app/reduxSelector';
import { updatePoints } from '../../components/ExamListComp/examListSlice';
import { checkLogin } from '../../hooks';
import {
  FinishWrap,
  ContentContainer,
  ContentWrap,
  Content,
  Typography,
  FlexBox,
  Point,
  DirectionBtn,
} from './finish.styled';
import { reset, setIsFinish } from './finishSlice';

function Finish() {
  const isLogin = useSelector(selectUser)?.userId;
  const isAnswer = useSelector(selectAnswerList)?.isFinish;
  const answerList = useSelector(selectAnswerList);
  const dispatch = useDispatch();
  const navigated = useNavigate();
  if (!isLogin || !isAnswer) return <Navigate to="/login" />;
  const handleGohome = (e) => {
    navigated('/dashboard');
    dispatch(setIsFinish(false));
    dispatch(reset());
    dispatch(
      updatePoints({
        examId: answerList.examId,
        pointOfMe:
          Math.trunc(infoFinishExam?.totalPoints / infoFinishExam?.totalQuestions) *
          infoFinishExam.truthy,
      }),
    );
    localStorage.removeItem('examStartInfo');
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const infoFinishExam = useSelector(computedPoint);
  return (
    <FinishWrap>
      <ContentContainer>
        <Typography fontWeight={700}>{answerList.title}</Typography>

        <ContentWrap>
          <Content>
            <FlexBox justify="space-between">
              <Typography>Số câu trả lời đúng: </Typography>
              <Typography>{infoFinishExam.truthy}</Typography>
            </FlexBox>
            <FlexBox justify="space-between">
              <Typography>Số câu trả lời sai: </Typography>
              <Typography>{infoFinishExam.falsy}</Typography>
            </FlexBox>
            <FlexBox justify="space-between">
              <Typography>Số câu chưa trả lời: </Typography>
              <Typography>{infoFinishExam.notChoose}</Typography>
            </FlexBox>
          </Content>
          <Point>
            Điểm số:{' '}
            {Math.trunc(infoFinishExam?.totalPoints / infoFinishExam?.totalQuestions) *
              infoFinishExam.truthy}{' '}
            / {infoFinishExam.totalPoints}
          </Point>
        </ContentWrap>
        <DirectionBtn onClick={handleGohome}>Dashboard</DirectionBtn>
      </ContentContainer>
    </FinishWrap>
  );
}

export default Finish;

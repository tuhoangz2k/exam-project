import { createSelector } from '@reduxjs/toolkit';
export const selectUser = (state) => state.user;
export const selectExamList = (state) => state.exams;
export const examList = (state) => state.exams.examList;
export const selectAnswerList = (state) => state.answerList;
export const selectAnswersQuestion = (state) => state.answerList.answerQuestions;
export const selectExamId = (state) => state.answerList.examId;
export const computedPoint = createSelector(
  examList,
  selectAnswersQuestion,
  selectExamId,
  (examList, answerExamList, examId) => {
    const infoExamPoints = {
      notChoose: 0,
      truthy: 0,
      falsy: 0,
      pointOfMe: 0,
    };
    const exam = examList.find((exam) => exam.id === examId);
    const questions = exam.questions;
    infoExamPoints.totalPoints = exam.totalPoints;
    infoExamPoints.totalQuestions = questions.length;

    questions.forEach((question) => {
      if (answerExamList[question.id]) {
        if (question.answerId === answerExamList[question.id]) {
          infoExamPoints.truthy++;
        } else {
          infoExamPoints.falsy++;
        }
      } else {
        infoExamPoints.notChoose++;
      }
    });
    return infoExamPoints;
  },
);

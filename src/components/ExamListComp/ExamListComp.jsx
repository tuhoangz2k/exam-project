import React from 'react';
import ExamComp from '../ExamComp/ExamComp';
import styled from 'styled-components';
const examList = [
  {
    description: 'Kiểm tra bảo mật thông tin',
    time: '7 phút',
    pointsOfMe: 200,
    totalPoints: 250,
    star: 4,
  },
  {
    description: 'Kiểm tra bảo mật thông tin',
    time: '7 phút',
    pointsOfMe: 200,
    totalPoints: 250,
    star: 4,
  },
  {
    description: 'Kiểm tra bảo mật thông tin',
    time: '7 phút',
    pointsOfMe: 200,
    totalPoints: 250,
    star: 4,
  },
  {
    description: 'Kiểm tra bảo mật thông tin',
    time: '7 phút',
    pointsOfMe: 200,
    totalPoints: 250,
    star: 4,
  },
  {
    description: 'Kiểm tra bảo mật thông tin',
    time: '7 phút',
    pointsOfMe: 200,
    totalPoints: 250,
    star: 4,
  },
  {
    description: 'Kiểm tra bảo mật thông tin',
    time: '7 phút',
    pointsOfMe: 200,
    totalPoints: 250,
    star: 4,
  },
];
const WrapExamList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 80px;

  padding: 50px 80px;
  font-size: 20px;
  @media (max-width: 1024px) {
    padding: 20px 30px;
    gap: 30px 40px;
  }
  @media (max-width: 739px) {
    padding: 10px 15px;
  }
`;

const WrapExam = styled.div`
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 1.5em 1em;
`;
function ExamListComp() {
  return (
    <WrapExamList>
      {examList.map((exam, index) => (
        <WrapExam key={index}>
          <ExamComp data={exam} />
        </WrapExam>
      ))}
    </WrapExamList>
  );
}

export default ExamListComp;

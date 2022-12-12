import React from 'react';
import ExamComp from '../ExamComp/ExamComp';
import styled from 'styled-components';

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
    grid-template-columns: 1fr;
  }
`;

const WrapExam = styled.div`
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 1.5em 1em;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
function ExamListComp({ handleEnterExam, data }) {
  return (
    <WrapExamList>
      {data.map((exam, index) => (
        <WrapExam key={index}>
          <ExamComp data={exam} handleEnterExam={handleEnterExam} />
        </WrapExam>
      ))}
    </WrapExamList>
  );
}

export default ExamListComp;

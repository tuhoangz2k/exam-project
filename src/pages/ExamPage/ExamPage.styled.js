import styled from 'styled-components';

export const ExamWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 739px) {
    margin-top: 3.6em;
  }
`;

export const ExamQuestionWrap = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  @media (max-width: 739px) {
    width: 100%;
  }
`;
export const ExamQuestionListWrap = styled.div`
  width: 25%;
  background: #d9d9d9;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 60px 20px;
  position: relative;
  z-index: 10;
  @media (max-width: 739px) {
    position: fixed;
    width: unset;
    left: 30px;
    right: 30px;
    top: 150px;
    bottom: 50px;
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(120%)')};
  }
`;
export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const ExamQuestionHead = styled.div`
  background: #d9d9d9;
  border: 1px solid rgba(0, 0, 0, 0.5);
  min-height: 165px;
  font-weight: 700;
  padding: 20px;
`;
export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;
export const CountTime = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const ExamQuestionChangeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000000;
  border-radius: 4px;
  /* background-color:${(props) => props.choice};  */
  background-color: #b6b6b6;
  width: 40px;
  height: 60px;
  cursor: pointer;
`;

export const CompletedBtn = styled(ExamQuestionChangeBtn)`
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  border-radius: 30px;
  width: 160px;
  font-weight: 700;
  font-size: 20px;
  height: 60px;
  background: #9f9d9f;
  border: none;
`;

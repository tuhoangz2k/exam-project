import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #999595;
  position: relative;
  /* height: 100%; */
  padding: 30px 40px;
  flex: 1;
`;
export const QuestionTitle = styled.h5`
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 26px;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 10%;
`;

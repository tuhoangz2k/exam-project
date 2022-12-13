import styled from 'styled-components';

export const FinishWrap = styled.div`
  min-height: 100vh;
  background: #c4c4c4;
  display: flex;
  font-size: 24px;
`;

export const ContentContainer = styled.div`
  position: relative;
  width: 70%;
  background-color: #d9d9d9;
  min-height: 440px;
  margin: auto;
  padding: 20px;
  margin-top: 25px;
  @media (max-width: 739px) {
    width: 85%;
    margin: 50px auto;
  }
`;
export const ContentWrap = styled.div`
  display: flex;
  @media (max-width: 739px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;
export const Content = styled.span`
  width: 50%;
  margin-top: 25px;
`;
export const Point = styled.p`
  width: 50%;
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
`;
export const Typography = styled.p`
  font-weight: ${(props) => props.fontWeight || 400};
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justify};
  margin-top: ${(props) => props.mt};
  & + & {
    margin-top: 12px;
  }
  @media (max-width: 739px) {
    justify-content: unset;
  }
`;

export const DirectionBtn = styled.button`
  border: none;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 200px;
  height: 50px;
  background: #999595;
  position: absolute;
  text-align: center;
  bottom: 80px;
  left: 50%;
  cursor: pointer;
  transform: translateX(-50%);
`;

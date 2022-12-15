import styled from 'styled-components';

export const Container = styled.div`
  height: 12px;
  width: 100%;
  position: relative;
`;

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 0.5s ease-in-out;
`;

export const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
  height: 12px;
`;

export const Progress = styled(BaseBox)`
  background: ${(props) => props.bg};
  width: ${(props) => props.percent}%;
`;

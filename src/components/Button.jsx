import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${(props) => (props.background ? props.background : 'transparent')};
  font-size: ${(props) => props.font}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 400;
  width: ${(props) => (props.width ? props.width : '163px')};
  height: ${(props) => (props.height ? props.height : '60px')};
  outline: none;
  border: none;
  font-size: 20px;
  user-select: none;
  cursor:pointer;
`;
function ButtonComp({ bg, fs, width, height, children, onClick }) {
  return (
    <ButtonStyled
      background={bg}
      font={fs}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
}

export default ButtonComp;

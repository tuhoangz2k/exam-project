import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background-color: #f3f1f1;
  border: none;
  outline: none;
  flex: 1;
  padding-left: 20px;
  font-size: 20px;
`;
const WrapInput = styled.span`
  width: 433px;
  height: 60px;
  display: flex;
  overflow: hidden;
  border-radius: 4px;
  @media (max-width: 739px) {
    width: 250px;
    height: 55px;
  }
`;

const WrapImg = styled.div`
  width: 115px;
  height: 100%;
  border-radius: 4px 0px 0px 4px;
  background-color: #f3f1f1;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

function InputField({ icon, placeholder, type }) {
  return (
    <WrapInput>
      <WrapImg>
        <Img src={icon} alt="" />
      </WrapImg>
      <Input placeholder={placeholder} type={type ? type : 'text'} />
    </WrapInput>
  );
}

export default InputField;

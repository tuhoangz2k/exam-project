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
  position: relative;
  border-radius: 4px;
  @media (max-width: 739px) {
    width: 250px;
    height: 55px;
  }
`;

const WrapImg = styled.div`
  width: 110px;
  height: 100%;
  border-radius: 4px 0px 0px 4px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 45%;
  object-fit: cover;
  object-position: center;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
  /* position: absolute;
  left: 0;
  right: 0;
  top: 110%;
  z-index: 11; */
`;
function InputField({ icon, placeholder, type = 'text', register, name, errors }) {
  return (
    <div>
      <WrapInput>
        <WrapImg>
          <Img src={icon} alt="" />
        </WrapImg>
        <Input placeholder={placeholder} type={type} {...register(name)} />
      </WrapInput>
      {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
    </div>
  );
}

export default InputField;

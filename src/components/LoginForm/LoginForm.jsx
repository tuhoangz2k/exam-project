import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from '../InputField';
import userImg from '../../assets/img/user.jpg';
import passwordImg from '../../assets/img/password.jpg';
import camera from '../../assets/img/camera.jpg';
import ButtonComp from '../Button';
import Checkbox from '../Checkbox';
// import Img from '../InputField';
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 590px;
  max-height: 752px;
  background-color: #999595;
  padding-top: 143px;
  padding-bottom: 170px;
  border-radius: 4px;
  border: 2px solid #fbbc1a;
  position: relative;
  margin-top: 70px;
  font-size: 20px;

  @media (max-width: 739px) {
    width: 341px;
  }
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
const WrapImg = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #fbbc1a;
`;

// const Checkbox = styled.input`
//   display: inline-block;
//   cursor: pointer;
//   height: 20px;
//   clip: rect(0 0 0 0);
//   // clip-path: inset(50%);
//   padding: 5px;
// `;

const WrapperCheckbox = styled.label`
  display: flex;
  color: black;
  margin-top: 16px;
  margin-bottom: 30px;
`;

const Content = styled.label`
  margin-left: 10px;
`;

const WrapInputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

function LoginForm({ isMobile }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <FormWrapper>
        <WrapImg>
          <Img src={camera} alt="" />
        </WrapImg>
        <WrapInputForm>
          <InputField icon={userImg} placeholder="username" />
          <InputField icon={passwordImg} placeholder="password" type="password" />
        </WrapInputForm>
        <WrapperCheckbox htmlFor="remember-me">
          <Checkbox
            type="checkbox"
            id="remember-me"
            checked={isChecked}
            onChange={handleCheckboxChange}
          ></Checkbox>
          <Content htmlFor="remember-me">Remember me</Content>
        </WrapperCheckbox>
        <ButtonComp bg="#D9D9D9" fs={22} width={isMobile ? '250px' : '80%'}>
          Login
        </ButtonComp>
      </FormWrapper>
    </>
  );
}

export default LoginForm;

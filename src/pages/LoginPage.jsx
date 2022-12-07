import React from 'react';
import styled from 'styled-components';
import MobileImg from '../assets/img/amela-mobile.png';
import PCImg from '../assets/img/amela-pc.png';
import LoginForm from '../components/LoginForm/LoginForm';

const Wrapper = styled.div`
  position: relative;
  background: url(${(props) => (props.backGroupImg ? props.backGroupImg : PCImg)})
    no-repeat;
  background-size: cover;
  min-height: 100vh;
`;
const FormContainer = styled.div`
  display: inline-block;
  position: fixed;
  top: 50%;
  right: 101px;
  transform: translate(0, -50%);
  z-index: 1;
  color: red;
  @media (max-width: 739px) {
    top: 50%;
    left: 50%;
    right: unset;
    transform: translate(-50%, -50%);
  }
`;
function LoginPage({ isMobile }) {
  return (
    <Wrapper backGroupImg={PCImg}>
      <FormContainer>
        <LoginForm isMobile={isMobile} />
      </FormContainer>
    </Wrapper>
  );
}

export default LoginPage;

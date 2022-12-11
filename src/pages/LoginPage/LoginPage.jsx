import React from 'react';
import { Navigate } from 'react-router-dom';

import * as yup from 'yup';
import { useSelector } from 'react-redux';
import PCImg from '../../assets/img/amela-pc.png';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Wrapper, FormContainer } from './LoginPage.styled';
import { selectUser } from '../../app/reduxSelector';
function LoginPage({ isMobile }) {
  const isLogin = !!useSelector(selectUser).userId;
  if (isLogin) {
    return <Navigate to="/dashboard" replace={true} />;
  } else {
    return (
      <Wrapper backGroupImg={PCImg}>
        <FormContainer>
          <LoginForm isMobile={isMobile} />
        </FormContainer>
      </Wrapper>
    );
  }
}

export default LoginPage;

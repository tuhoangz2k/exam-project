import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../pages/DashBoard/userSlice';
import InputField from '../InputField';
import userImg from '../../assets/img/user.jpg';
import passwordImg from '../../assets/img/password.jpg';
import camera from '../../assets/img/camera.jpg';
import ButtonComp from '../Button';
import Checkbox from '../Checkbox';
import {
  Content,
  FormWrapper,
  Img,
  WrapImg,
  WrapInputForm,
  WrapperCheckbox,
  ErrorMessage,
} from './LoginForm.styled';
import { selectUser } from '../../app/reduxSelector';
// import Img from '../InputField';

const loginSchema = yup.object({
  username: yup
    .string()
    .required('username is required')
    .min(6, 'user is min 6 characters'),
  password: yup
    .string()
    .required('password is required')
    .min(6, 'password is min 6 characters'),
});

function LoginForm({ isMobile }) {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const isUser = useSelector(selectUser).userId;
  const handleSubmitForm = (value) => {
    const newValue = { ...value, name: ['username', 'password'] };
    dispatch(login(newValue));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (!isUser) {
      setError('username', {
        message: 'You must have an account',
      });
      setError('password', {
        message: 'You must have an account',
      });
    }
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(handleSubmitForm)}>
        <WrapImg>
          <Img src={camera} alt="" />
        </WrapImg>
        <WrapInputForm>
          <InputField
            icon={userImg}
            placeholder="username"
            name="username"
            control={control}
            register={register}
            errors={errors.username}
          />

          <InputField
            icon={passwordImg}
            placeholder="password"
            name="password"
            type="password"
            control={control}
            register={register}
            errors={errors.password}
          />
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
        <ButtonComp bg="#D9D9D9" fs={22} width={isMobile ? '250px' : '80%'} type="submit">
          Login
        </ButtonComp>
      </FormWrapper>
    </>
  );
}

export default LoginForm;

import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '../assets/img/female.jpg';
import styled from 'styled-components';
import ButtonComp from './Button';
import { logout } from '../pages/DashBoard/userSlice';
import { selectUser } from '../app/reduxSelector';
import { getUser } from '../hooks/common';
const UserProfile = styled.div`
  font-size: 16px;
  border: 1px solid #666;
  height: 100%;
  position: relative;
`;
const UserInfor = styled.p`
  font-size: 1.125em;
  font-weight: 700;
  margin-left: 0.8em;
  margin-bottom: 1.25em;
`;

const UserAvatarWrap = styled.div`
  width: 60%;
  height: auto;
  margin: 1.875em auto;
  border-radius: 99999999rem;
`;
const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 99999999rem;
`;
const LogOutButton = styled.span`
  display: inline-block;
  border: 1px solid black;
  position: absolute;
  bottom: 3.125em;
  left: 50%;
  transform: translateX(-50%);
`;
function UserComp() {
  const navigation = useNavigate();
  const userid = useSelector(selectUser);
  const user = useMemo(() => getUser(userid.userId), [userid]);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    dispatch(logout());
  };
  return (
    <UserProfile>
      <UserAvatarWrap>
        <UserAvatar src={Avatar} width="20" height="20" />
      </UserAvatarWrap>
      <UserInfor>User: {user?.username}</UserInfor>
      <UserInfor>Points: {user?.points}</UserInfor>
      <LogOutButton onClick={handleLogout}>
        <ButtonComp>Logout</ButtonComp>
      </LogOutButton>
    </UserProfile>
  );
}

export default UserComp;

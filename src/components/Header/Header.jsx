import React from 'react';
import { WrapHeader, WrapMenu } from './Header.styled';
import { AiOutlineMenu } from 'react-icons/ai';
function DashboardHeader({ content, setIsOpenMenu }) {
  return (
    <WrapHeader>
      <WrapMenu onClick={() => setIsOpenMenu(true)}>
        <AiOutlineMenu size={28} />
      </WrapMenu>
      {content}
    </WrapHeader>
  );
}

export default DashboardHeader;

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import DashboardHeader from '../../components/Header';
import { Modal } from '../../components/Header/Header.styled';
import ExamListComp from '../../components/ExamListComp/ExamListComp';
import PaginationComp from '../../components/PaginationComp/PaginationComp';
import UserComp from '../../components/UserComp';
import {
  ExamListContainer,
  ExamsContent,
  FilterSelect,
  Option,
  SearchIcon,
  SearchIconWrap,
  SearchInput,
  UserContainer,
  WrapFilters,
  Wrapper,
  WrapSearchInput,
} from './dashBoard.styled';

export const options = [
  { name: 'Difficult', value: 'difficult' },
  { name: 'Easy', value: 'easy' },
  { name: 'Normal', value: 'normal' },
];

function DashBoard({ isMobile }) {
  // console.log(isMobile);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      {<DashboardHeader setIsOpenMenu={setIsOpenMenu} content="Dashboard" />}
      <Wrapper>
        <UserContainer isOpen={isOpenMenu}>
          <UserComp />
        </UserContainer>
        <ExamsContent>
          <WrapFilters>
            <WrapSearchInput>
              <SearchInput placeholder="Search"></SearchInput>
              <SearchIconWrap>
                {/* <SearchIcon src={SearchIcon} /> */}
                <AiOutlineSearch />
              </SearchIconWrap>
            </WrapSearchInput>
            <FilterSelect>
              {options.map((option, index) => (
                <Option key={index} value="">
                  {option.name}
                </Option>
              ))}
            </FilterSelect>
          </WrapFilters>
          <ExamListContainer>
            <ExamListComp />
          </ExamListContainer>
          <PaginationComp></PaginationComp>
        </ExamsContent>
      </Wrapper>
      <Modal isOpen={isOpenMenu} onClick={() => setIsOpenMenu(false)} />
    </>
  );
}

export default DashBoard;

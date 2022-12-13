import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';

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
import { useSelector } from 'react-redux';
import { selectExamList, selectUser } from '../../app/reduxSelector';

export const options = [
  { name: 'All', value: 'all' },
  { name: 'Difficult', value: 'difficult' },
  { name: 'Easy', value: 'easy' },
  { name: 'Normal', value: 'normal' },
];

function DashBoard({ isMobile }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [difficulty, setDifficulty] = useState('all');
  const [searchInputValue, setSearchInputValue] = useState('');
  const timeoutRef = useRef();
  const [filters, setFilters] = useState({
    difficulty: 'all',
    search: '',
  });
  const location = useLocation();
  console.log(location);
  const examList = useSelector(selectExamList).examList;
  const navigated = useNavigate();
  const isLogin = useSelector(selectUser).userId;
  if (!isLogin) return <Navigate to="/login" replace={true} />;

  function handleEnterExam(examId) {
    navigated(`/exam/${examId}/question/${examId}question1`);
  }
  const handleOnchangeFilter = (e) => {
    const value = e.target.value;
    setDifficulty(value);
    setFilters({ ...filters, difficulty: value });
  };
  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchInputValue(value);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const filterExamList = useMemo(() => {
    return examList?.filter((exam) => {
      const dificultCondition = difficulty === 'all' || difficulty === exam.difficulty;
      const searchValue = searchInputValue.trim().toLowerCase();
      return dificultCondition && exam.describe.toLowerCase().includes(searchValue);
    });
  }, [filters]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (timeoutRef.timeoutId) clearTimeout(timeoutRef.timeoutId);

    timeoutRef.timeoutId = setTimeout(() => {
      setFilters({ ...filters, search: searchInputValue });
    }, 430);
  }, [searchInputValue]);
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
              <SearchInput
                placeholder="Search"
                value={searchInputValue}
                onChange={handleSearchInputChange}
              />
              <SearchIconWrap>
                {/* <SearchIcon src={SearchIcon} /> */}
                <AiOutlineSearch />
              </SearchIconWrap>
            </WrapSearchInput>
            <FilterSelect onChange={handleOnchangeFilter}>
              {options.map((option, index) => (
                <Option key={index} value={option.value}>
                  {option.name}
                </Option>
              ))}
            </FilterSelect>
          </WrapFilters>
          <ExamListContainer>
            <ExamListComp handleEnterExam={handleEnterExam} data={filterExamList} />
          </ExamListContainer>
          <PaginationComp></PaginationComp>
        </ExamsContent>
      </Wrapper>
      <Modal isOpen={isOpenMenu} onClick={() => setIsOpenMenu(false)} />
    </>
  );
}

export default DashBoard;

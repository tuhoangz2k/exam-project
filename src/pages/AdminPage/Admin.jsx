import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import queryString from 'query-string';

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { selectExamList, selectUser } from '../../app/reduxSelector';
import ExamListComp from '../../components/ExamListComp/ExamListComp';
import DashboardHeader from '../../components/Header/Header';
import { Modal } from '../../components/Header/Header.styled';
import PaginationComp from '../../components/PaginationComp/PaginationComp';
import UserComp from '../../components/UserComp';
import { getRole } from '../../hooks/common';
import {
  ExamListContainer,
  ExamsContent,
  FilterSelect,
  Option,
  SearchIconWrap,
  SearchInput,
  UserContainer,
  WrapFilters,
  Wrapper,
  WrapSearchInput,
} from './admin.styled';
export {
  ExamListContainer,
  Option,
  FilterSelect,
  SearchInput,
  SearchIcon,
  SearchIconWrap,
  WrapSearchInput,
} from './admin.styled';
export const options = [
  { name: 'All', value: 'all' },
  { name: 'Difficult', value: 'difficult' },
  { name: 'Easy', value: 'easy' },
  { name: 'Normal', value: 'normal' },
];

function Admin() {
  const userId = useSelector(selectUser)?.userId;
  const isAdmin = getRole(userId) === 'admin';
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [difficulty, setDifficulty] = useState('all');
  const [filters, setFilters] = useState({ difficulty, search: '' });
  const [searchInputValue, setSearchInputValue] = useState('');
  const examList = useSelector(selectExamList).examList;
  const timeoutRef = useRef();
  const navigated = useNavigate();
  const location = useLocation();

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchInputValue(value);
  };
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
  useEffect(() => {
    navigated({ pathname: location.pathname, search: queryString.stringify(filters) });
  }, [filters]);
  const handleOnchangeFilter = (e) => {
    const value = e.target.value;
    setDifficulty(value);
    setFilters({ ...filters, difficulty: value });
  };
  if (!userId) return <Navigate to="/login" replace={true} />;
  if (!isAdmin) return <Navigate to="/dashboard" replace={true} />;
  if (isAdmin)
    return (
      <>
        {<DashboardHeader setIsOpenMenu={setIsOpenMenu} content="Dashboard" />}
        <Wrapper>
          <UserContainer isOpen={isOpenMenu}>
            <UserComp isAdmin={false} />
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
              <ExamListComp data={filterExamList} />
            </ExamListContainer>
            <PaginationComp></PaginationComp>
          </ExamsContent>
        </Wrapper>
        <Modal isOpen={isOpenMenu} onClick={() => setIsOpenMenu(false)} />
      </>
    );
}

export default Admin;

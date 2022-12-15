import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
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
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswerList, selectExamList, selectUser } from '../../app/reduxSelector';
import { setOpenExam, setTime } from '../Finish/finishSlice';
import { getRole } from '../../hooks';

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
  const location = useLocation();
  const timeoutRef = useRef();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ difficulty, search: '' });
  const examList = useSelector(selectExamList).examList;
  const examIsDoing = useSelector(selectAnswerList);
  const navigated = useNavigate();
  const isLogin = useSelector(selectUser).userId;
  const isAdmin = getRole(isLogin) === 'admin';
  const isStartedExam = useMemo(
    () => !!JSON.parse(localStorage.getItem('examStartInfo'))?.isStart,
    [],
  );

  if (!isLogin) return <Navigate to="/login" replace={true} />;

  if (isStartedExam)
    return (
      <Navigate
        to={`/exam/${examIsDoing?.examId}/question/${examIsDoing?.examId}question1`}
        replace={true}
      />
    );

  function handleEnterExam(examId, title, time) {
    navigated(`/exam/${examId}/question/${examId}question1`);
    dispatch(setTime(time));
    dispatch(setOpenExam({ id: examId, title }));
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    navigated({ pathname: location.pathname, search: queryString.stringify(filters) });
  }, [filters]);

  const handleGotoAdmin = (e) => {
    navigated('/admin');
  };

  return (
    <>
      {<DashboardHeader setIsOpenMenu={setIsOpenMenu} content="Dashboard" />}
      <Wrapper>
        <UserContainer isOpen={isOpenMenu}>
          <UserComp isAdmin={isAdmin} handleGotoAdmin={handleGotoAdmin} />
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

import React from 'react';
import styled from 'styled-components';
import ExamListComp from '../../components/ExamListComp/ExamListComp';
import PaginationComp from '../../components/PaginationComp/PaginationComp';
import UserComp from '../../components/UserComp';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  min-height: 100vh;
`;
const UserContainer = styled.div`
  grid-column: 1/2;
`;
const ExamsContent = styled.div`
  grid-column: 2 / span 4;
  padding: 2.5em;
  background-color: #999595;
`;

const WrapFilters = styled.div`
  display: flex;
  gap: 1.875em;
  font-size: 20px;
`;

const WrapSearchInput = styled.div`
  display: flex;
  background: #f3f1f1;
  border: 1px solid #000000;
  border-radius: 4px;
  overflow: hidden;
  flex: 1;
`;
const SearchIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  cursor: pointer;
`;
const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  flex: 1;
  height: 3.125em;
  padding-left: 15px;
`;

const FilterSelect = styled.select`
  display: inline-block;
  cursor: pointer;
  width: 12.5em;
  outline: none;
  background-color: #d9d9d9;
`;
const options = [
  { name: 'Difficult', value: 'difficult' },
  { name: 'Easy', value: 'easy' },
  { name: 'Normal', value: 'normal' },
];
const ExamListContainer = styled.div`
  background: #d9d9d9;
  border-radius: 4px;
  margin-top: 1.5em;
`;

const Option = styled.option`
  display: block;
  padding: 0.375em;
`;

function DashBoard() {
  return (
    <>
      <Wrapper>
        <UserContainer>
          <UserComp />
        </UserContainer>
        <ExamsContent>
          <WrapFilters>
            <WrapSearchInput>
              <SearchInput placeholder="Search"></SearchInput>
              <SearchIconWrap>
                <SearchIcon src={SearchIcon} />
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
    </>
  );
}

export default DashBoard;

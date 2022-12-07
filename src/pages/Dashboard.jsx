import React from 'react';
import styled from 'styled-components';
import UserComp from '../components/UserComp';
import searchIcon from '../assets/img/SearchIcon.svg';
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
`;

const WrapSearchInput = styled.div`
  display: flex;
  background: #f3f1f1;
  border: 1px solid #000000;
  border-radius: 4px;
  overflow: hidden;
`;
const SearchIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  cursor: pointer;
`;
const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const SearchWrap = styled.div``;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  flex: 1;
  height: 3.125em;
  padding-left: 15px;
`;

function UserPage() {
  return (
    <Wrapper>
      <UserContainer>
        <UserComp />
      </UserContainer>
      <ExamsContent>
        <WrapFilters>
          <WrapSearchInput>
            <SearchInput placeholder="Search"></SearchInput>
            <SearchIconWrap>
              <SearchIcon src={searchIcon} />
            </SearchIconWrap>
          </WrapSearchInput>
        </WrapFilters>
      </ExamsContent>
    </Wrapper>
  );
}

export default UserPage;

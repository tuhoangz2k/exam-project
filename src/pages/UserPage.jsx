import React from 'react';
import styled from 'styled-components';
import UserComp from '../components/UserComp';
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const UserContainer = styled.div`
  grid-column: 1/2;
`;
const ExamsContent = styled.div`
  grid-column: 2 / span 3;
`;
function UserPage() {
  return (
    <Wrapper>
      <UserContainer>
        <UserComp />
      </UserContainer>
      <ExamsContent>Usa</ExamsContent>
    </Wrapper>
  );
}

export default UserPage;

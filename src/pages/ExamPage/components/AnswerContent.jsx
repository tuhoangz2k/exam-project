import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  & + & {
    margin-top: 20px;
  }
`;
const alphabet = { 0: 'A', 1: 'B', 2: 'C', 3: 'D' };
function AnswerContent({ label, index }) {
  return (
    <Wrapper>
      <input type="checkbox" />
      <label>
        {alphabet[index]} {label}
      </label>
    </Wrapper>
  );
}

export default AnswerContent;

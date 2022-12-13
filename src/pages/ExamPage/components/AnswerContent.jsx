import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAnswersQuestion } from '../../../app/reduxSelector';
const Wrapper = styled.div`
  & + & {
    margin-top: 20px;
  }
`;
const alphabet = { 0: 'A', 1: 'B', 2: 'C', 3: 'D' };
function AnswerContent({ label, index, name, handleAddAnswer, value }) {
  const handleChange = (e) => {
    if (handleAddAnswer) {
      const value = e.target.value;
      handleAddAnswer({ value, name });
    }
  };
  const isChecked = useSelector(selectAnswersQuestion)[name] === value;
  return (
    <Wrapper>
      <input
        type="radio"
        value={value}
        onChange={handleChange}
        name={name}
        checked={isChecked}
      />
      <label>
        {alphabet[index]} {label}
      </label>
    </Wrapper>
  );
}

export default AnswerContent;

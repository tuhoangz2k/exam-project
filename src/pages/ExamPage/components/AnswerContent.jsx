import React from 'react';
import { useSelector } from 'react-redux';
import { selectAnswersQuestion } from '../../../app/reduxSelector';
import { Wrapper, RadioInput, CheckMark } from './AnswerContent.styled';

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
    <Wrapper htmlFor={value}>
      <input
        type="radio"
        value={value}
        onChange={handleChange}
        name={name}
        checked={isChecked}
        id={value}
      />
      <span>
        {alphabet[index]} {label}
      </span>
    </Wrapper>
  );
}

export default AnswerContent;

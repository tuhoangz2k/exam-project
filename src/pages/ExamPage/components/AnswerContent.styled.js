import styled from 'styled-components';
export const Wrapper = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 18px;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  & + & {
    margin-top: 20px;
  }
`;
export const CheckMark = styled.span`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  background: white;
  border: 1px solid #ccc;
  @media (max-width: 739px) {
    top: 10%;
  }
`;

export const RadioInput = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${CheckMark} {
    background: #ccc;
  }
  &:checked + ${Wrapper} {
    background: red;
    border: 2px solid red;
  }
  &:checked + ${CheckMark} {
    background: green;
    border: 1px solid blue;
  }
`;

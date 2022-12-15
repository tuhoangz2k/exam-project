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
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked ${CheckMark}:after {
    display: block;
  }
`;

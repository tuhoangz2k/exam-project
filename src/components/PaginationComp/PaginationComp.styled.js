import styled from 'styled-components';

export const NavPageButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  min-height: 42px;
  border: none;
  border-radius: 2px;
  background-color: ${(props) => (props.disabled ? '#919EAB' : props.bg || 'white')};
`;
export const WrapperNavPage = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  gap: 0.625em;
`;

import styled from 'styled-components';
export const WrapHeader = styled.header`
  display: none;
  text-align: center;
  background-color: #545151;
  font-size: 20px;
  font-weight: 700;
  color: white;
  height: 3.5em;
  @media (max-width: 739px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export const WrapMenu = styled.menu`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
`;
export const Modal = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.3);
`;

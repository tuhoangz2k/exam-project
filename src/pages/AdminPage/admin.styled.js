import styled from 'styled-components';
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  min-height: 100vh;
  @media (max-width: 739px) {
    grid-template-columns: 1fr;
  }
`;
export const UserContainer = styled.div`
  transition: all 0.4s linear;
  transform: translateX(0);
  background-color: #d9d9d9;
  @media (max-width: 739px) {
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-150%)')};
  }
  @media (max-width: 739px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 52%;
    z-index: 10;
  }
  @media (min-width: 740px) {
    grid-column: 1/2;
  }
`;
export const ExamsContent = styled.div`
  grid-column: 2 / span 4;
  padding: 2.5em;
  background-color: #999595;

  @media (max-width: 739px) {
    grid-column: 1 / span 5;
    padding: 80px 1.25em;
  }
`;

export const WrapFilters = styled.div`
  display: flex;
  gap: 1.875em;
  font-size: 20px;
`;

export const WrapSearchInput = styled.div`
  display: flex;
  background: #f3f1f1;
  border: 1px solid #000000;
  border-radius: 4px;
  overflow: hidden;
  flex: 1;
`;
export const SearchIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  cursor: pointer;
`;
export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  flex: 1;
  height: 3.125em;
  padding-left: 15px;
`;

export const FilterSelect = styled.select`
  display: inline-block;
  cursor: pointer;
  width: 12.5em;
  outline: none;
  background-color: #d9d9d9;
  @media (max-width: 739px) {
    display: none;
  }
`;

export const ExamListContainer = styled.div`
  background: #d9d9d9;
  border-radius: 4px;
  margin-top: 1.5em;
`;

export const Option = styled.option`
  display: block;
  padding: 0.375em;
`;

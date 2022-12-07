import React, { useState } from 'react';
import { NavPageButton, WrapperNavPage } from './PaginationComp.styled';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
function PaginationComp() {
  const [disabled, setDisabled] = useState(true);
  return (
    <WrapperNavPage>
      <NavPageButton disabled={disabled}>
        <RiArrowLeftSLine color="#C4CDD5" size={16} />
      </NavPageButton>
      <NavPageButton>1</NavPageButton>
      <NavPageButton>2</NavPageButton>
      <NavPageButton>...</NavPageButton>
      <NavPageButton>9</NavPageButton>
      <NavPageButton>10</NavPageButton>
      <NavPageButton>
        <RiArrowRightSLine color="#C4CDD5" size={16} />
      </NavPageButton>
    </WrapperNavPage>
  );
}

export default PaginationComp;

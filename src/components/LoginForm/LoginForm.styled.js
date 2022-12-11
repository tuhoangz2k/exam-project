import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 590px;
  max-height: 752px;
  background-color: #999595;
  padding-top: 143px;
  padding-bottom: 170px;
  border-radius: 4px;
  border: 2px solid #fbbc1a;
  position: relative;
  margin-top: 70px;
  font-size: 20px;

  @media (max-width: 739px) {
    width: 341px;
  }
`;
export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
export const WrapImg = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #fbbc1a;
`;

// export const Checkbox = styled.input`
//   display: inline-block;
//   cursor: pointer;
//   height: 20px;
//   clip: rect(0 0 0 0);
//   // clip-path: inset(50%);
//   padding: 5px;
// `;

export const WrapperCheckbox = styled.label`
  display: flex;
  color: black;
  margin-top: 16px;
  margin-bottom: 30px;
`;

export const Content = styled.label`
  margin-left: 10px;
`;

export const WrapInputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

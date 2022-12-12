import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import {
  ContentStyled,
  TypographyStyled,
  Title,
  WrapInfor,
  WrapStar,
} from './ExamCompStyled';
import point from '../../assets/img/point.svg';
import clock from '../../assets/img/clock.svg';

const rating = new Array(5).fill(2);
function ExamComp({ data, handleEnterExam }) {
  const navigatedExam = () => {
    if (handleEnterExam) handleEnterExam(data.id);
  };
  return (
    <div onClick={navigatedExam}>
      <Title>{data.describe}</Title>
      <ContentStyled>
        <WrapInfor>
          <img src={clock} alt="" width="25" height="25" color="#909090" />
          <TypographyStyled size={16}>{data.time}</TypographyStyled>
        </WrapInfor>
        <WrapInfor>
          <img src={point} alt="" width="25" height="25" color="#909090" />
          <TypographyStyled size={16}>
            {data.pointsOfMe}/{data.totalPoints} điểm
          </TypographyStyled>
        </WrapInfor>
      </ContentStyled>
      <WrapStar>
        {rating.map((item, index) => (
          <AiFillStar
            size={22}
            key={index}
            color={`${index + 1 <= data.rating ? '#909090' : 'white'}`}
          />
        ))}
      </WrapStar>
    </div>
  );
}

export default ExamComp;

import React from 'react';
import {
  FinishWrap,
  ContentContainer,
  ContentWrap,
  Content,
  Typography,
  FlexBox,
  Point,
  DirectionBtn,
} from './finish.styled';

function Finish() {
  return (
    <FinishWrap>
      <ContentContainer>
        <Typography fontWeight={700}>Kiểm tra an toàn bảo mật thông tin lần 2</Typography>

        <ContentWrap>
          <Content>
            <FlexBox justify="space-between">
              <Typography>Số câu trả lời đúng: </Typography>
              <Typography>2</Typography>
            </FlexBox>
            <FlexBox justify="space-between">
              <Typography>Số câu trả lời sai: </Typography>
              <Typography>2</Typography>
            </FlexBox>
            <FlexBox justify="space-between">
              <Typography>Số câu chưa trả lời: </Typography>
              <Typography>2</Typography>
            </FlexBox>
          </Content>
          <Point>Điểm số: 120 / 160</Point>
        </ContentWrap>
        <DirectionBtn>Dashboard</DirectionBtn>
      </ContentContainer>
    </FinishWrap>
  );
}

export default Finish;
